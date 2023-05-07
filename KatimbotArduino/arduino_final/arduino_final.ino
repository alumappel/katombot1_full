/*
MIT License

Copyright (c) 2008-2016 Seeed Development Limited (www.seeedstudio.com / www.seeed.cc)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
/*************************************************** 
 This is a library written for the Maxim MAX30105 Optical Smoke Detector
 It should also work with the MAX30102. However, the MAX30102 does not have a Green LED.
 These sensors use I2C to communicate, as well as a single (optional)
 interrupt line that is not currently supported in this driver.
 
 Written by Peter Jansen and Nathan Seidle (SparkFun)
 BSD license, all text above must be included in any redistribution.
 *****************************************************/

/*
LICENSE:
https://github.com/arduino-libraries/Arduino_JSON/blob/master/LICENSE.txt
https://github.com/arduino-libraries/Arduino_LSM6DS3/blob/master/LICENSE.txt
*/
//לב
#include <Wire.h>
#include "MAX30105.h"
#include "heartRate.h"
MAX30105 particleSensor;
const byte RATE_SIZE = 10; //Increase this for more averaging. 4 is good.
byte rates[RATE_SIZE]; //Array of heart rates
byte rateSpot = 0;
long lastBeat = 0; //Time at which the last beat occurred
float beatsPerMinute;
int beatAvg;

//מתח
const int GSR = A0;
int sensorValue = 0;
int gsr_average = 0;

//שרת
#include <ArduinoHttpClient.h>
#include <WiFiNINA.h>
#include <Arduino_JSON.h>
#include <Arduino_LSM6DS3.h>
#include <ArduinoJson.h>

/////// Wifi Settings ///////
//char ssid[] = "INDOOR";
//char pass[] = "";

//char ssid[] = "AppsFlyer Guest";
//char pass[] = "haveaniceday";

char ssid[] = "NETTA";
char pass[] = "NettA1998";

//שם השרת אליו נתחבר, אין להוסיף נתיב בסוף או HTTP בהתחלה
const char serverName[] = "projects.telem-hit.net";


int port = 443;
String pnum = "";
String user = "none";
//התחברות לWIFI
WiFiSSLClient wifi;
HttpClient client = HttpClient( wifi, serverName, port );
int status = WL_IDLE_STATUS;
int allBeats[150];
int allGSR[150];
int place = 0;
//מתח
#define aref_voltage 3.3

//דגלים
bool handbefore = false;

//קאונטרים
int mytime = 0;
int hands = 0;
int sumGSR = 0;
int sumBPMs = 0;
int bpm_average = 0;


int handstreshold = 150;
void setup() {
  //לד
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin( 9600 );
/*  
  //לב
  Serial.println("Initializing...");
  
  // Initialize sensor
  if (!particleSensor.begin(Wire, I2C_SPEED_FAST)) //Use default I2C port, 400kHz speed
  {
    Serial.println("MAX30105 was not found. Please check wiring/power. ");
    // while (1);
  }
  Serial.println("Place your index finger on the sensor with steady pressure.");

  particleSensor.setup(); //Configure sensor with default settings
  particleSensor.setPulseAmplitudeRed(0x0A); //Turn Red LED to low to indicate sensor is running
  particleSensor.setPulseAmplitudeGreen(0); //Turn off Green LED
*/

  //וויפי
  while ( status != WL_CONNECTED )
  {
    Serial.print( "Attempting to connect to Network named: " );
    Serial.println( ssid );
    status = WiFi.begin( ssid, pass );
  }
  Serial.println(status);
  digitalWrite(LED_BUILTIN, HIGH);

  Serial.print( "SSID: " );
  Serial.println( WiFi.SSID() );

  IPAddress ip = WiFi.localIP();
  Serial.print( "IP Address: " );
  Serial.println( ip );
  client.stop();
    client.endRequest();

  client.beginRequest();
  //קבלת מספר הפרזנטציה האחרונה
 client.get("/2022/IOT_DanNetta/api/FireBase/FindUserActive");

  client.endRequest();

  int statusCode = client.responseStatusCode();
  Serial.print( "Status code: " );
  Serial.println( statusCode );
  String response = client.responseBody();
  Serial.print( "Response: " );
  Serial.println( response );
  user = response;
  if (user != null && user != "none")
  {
    digitalWrite(LED_BUILTIN, LOW);

    user = user.substring(1, user.length());

    client.get("/2022/IOT_DanNetta/api/FireBase/findPActive/" + user);
    statusCode = client.responseStatusCode();
    Serial.print( "Status code: " );
    Serial.println( statusCode );
    response = client.responseBody();
    Serial.print( "Response: " );
    Serial.println( response );

    //פחות 1 - מספר פרזנטציה אחרונה

    pnum = response;
    Serial.println(millis());
    Serial.println( "Wait 30 seconds" );
    //בדיקה שהאקסרומטר עובד
    if (!IMU.begin()) {
      Serial.println("Failed to initialize IMU!");
      while (1);
    }
  }
}


void loop() {

/*
  long irValue = particleSensor.getIR();

  if (checkForBeat(irValue) == true)
  {
    //We sensed a beat!
    long delta = millis() - lastBeat;
    lastBeat = millis();

    beatsPerMinute = 60 / (delta / 1000.0);

    if (beatsPerMinute < 255 && beatsPerMinute > 20)
    {
      rates[rateSpot++] = (byte)beatsPerMinute; //Store this reading in the array
      rateSpot %= RATE_SIZE; //Wrap variable

      //Take average of readings
      beatAvg = 0;
      for (byte x = 0 ; x < RATE_SIZE ; x++)
        beatAvg += rates[x];
      beatAvg /= RATE_SIZE;
    }
  }*/

  if (millis() > 20000) {

    mytime++;


    float x, y, z;

    if (IMU.gyroscopeAvailable()) {
      IMU.readGyroscope(x, y, z);

      if (x > handstreshold or y > handstreshold or z > handstreshold ) {
        if (!handbefore) {
          hands++;
          handbefore = true;
          Serial.println( hands );

        }

      }
      else {
        handbefore = false;
      }
    }



 /*   sumBPMs += beatAvg;*/
    sensorValue = analogRead(GSR);
    sumGSR += sensorValue;
    if (mytime % 50 == 0) {
      gsr_average = sumGSR / 50;
    //  bpm_average = sumBPMs / 50;
      Serial.println(gsr_average);
    //  Serial.println(bpm_average);
      allGSR[place] = gsr_average;
   //   allBeats[place] = bpm_average;
        allBeats[place] = 45;
      place++;
   //   sumBPMs = 0;
      sumGSR = 0;
    }
    if (mytime % 1500 == 0) {

      StaticJsonDocument <2048> doc;
      String json;
      doc["Hands"]   = hands ;
      for (int i = 0; i < 15; i++) {
        doc["HeartList"][i] = allBeats[i];
        doc["ResistList"][i] = allGSR[i];
      }

      //המרת הג'יסון לסטרינג
      serializeJson(doc, json);
      Serial.println(json);
      postData(json);
      hands = 0;
      place = 0;
    }


  }
  delay(20);
}



void postData(String json) {
  //אם יש מספר לפרזנטציה
  if (pnum != "" && user != "none") {
    //פוסט לשרת
    client.beginRequest();
    client.post("/2022/IOT_DanNetta/api/FireBase/InsertArduino/u" + user + "/" + pnum);
    client.sendHeader("Content-Type", "application/json");
    client.sendHeader("Content-Length", json.length());
    client.beginBody();
    client.print(json);
    client.endRequest();
    // read the status code and body of the response
    int statusCode = client.responseStatusCode();
    Serial.print( "Status code: " );
    Serial.println( statusCode );
    String response = client.responseBody();
    Serial.print( "Response: " );
    Serial.println(response);
  }
}
