// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace fireBaseHandler.Client.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 3 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.WebAssembly.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler.Client;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler.Client.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler;

#line default
#line hidden
#nullable disable
#nullable restore
#line 13 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 14 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using BlazorAnimate;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Pages\MainPageOld.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Pages\MainPageOld.razor"
using System.Net.Http.Json;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Pages\MainPageOld.razor"
using System.Threading.Tasks;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Pages\MainPageOld.razor"
using fireBaseHandler.Shared.Entities;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Pages\MainPageOld.razor"
using fireBaseHandler.Client.Components;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Pages\MainPageOld.razor"
using fireBaseHandler.Client.Services;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Components.RouteAttribute("/MainPage11")]
    public partial class MainPageOld : global::Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#nullable restore
#line 266 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Pages\MainPageOld.razor"
       
    LogInData user = new LogInData();
    string username = "";
    bool log = false;
    bool allPres = false;
    //הגדרת משתנים
    string message = "";
    bool cardsLoad = false;
    List<int> fiveLastScores = new List<int>();
    List<Presentation> presList = new List<Presentation>();
    List<Measure> allScore = new List<Measure>();
    string moves = "0em";
    int movecard = 0;
    string progress = "";
    Score high = new Score();
    bool newu;
    string width = "23em";
    string defultImg = "./images/profile.svg";
    string myFileImage = "./images/profile.svg";
    List<string> DeletedImages = new List<string>();
    bool del = false;
    Presentation delP;
    long maxFileSize = 4194304;

    //פונקציה הפועלת מיד בעליית הדף
    protected override async Task OnInitializedAsync()
    {
        sessionStorage.SetItem("newPre", false);
        sessionStorage.SetItem("gototip", "./MainPage");
        logged.isLog = true;
        user = sessionStorage.GetItem<LogInData>("user");

        newu = sessionStorage.GetItem<bool>("isnew");
        if (newu)
        {
            width = "32em";
        }
        if (user == null)
        {
            navigat.NavigateTo("./LogIn");
        }
        else
        {


            username = user.FirstName;
            myFileImage = user.Pic;
            if (!newu)
            {

                try
                {
                    //קבלת כל הפרזנטציות שנעשו
                    var getResponse = await Http.GetAsync("api/FireBase/AllPforUser/" + user.ID.ToString());
                    Http.DefaultRequestHeaders.ConnectionClose = true;
                    presList = getResponse.Content.ReadFromJsonAsync<List<Presentation>>().Result;
                    presList.Reverse();
                    sessionStorage.SetItem("pcount", presList.Count);
                }
                catch
                {
                    //הודעת שגיאה
                    message = "לא הצלחתי למצוא את הפרזנטציות שלך";
                }

                if (presList.Count > 0)
                {
                    Presentation best = new Presentation();
                    best.info = new PresentationInfo() { Score = -1 };

                    Score bestS = new Score {myscore = -1 };
                    Measure empty = new Measure { score = -1 };
                    bestS.Lookmeasure = empty;
                    bestS.MoveMeasure = empty;
                    bestS.HandsMeasure = empty;
                    bestS.Voicemeasure = empty;

                    foreach (Presentation pr in presList)
                    {
                        if (presList.IndexOf(pr) < 5)
                            fiveLastScores.Add(Convert.ToInt16(pr.info.Score));
                        if (best.info.Score < pr.info.Score)
                            best = pr;
                        Score temp = new Score {presentation = pr };
                        temp.divideToMeasure();
                        temp.getAllScores();
                        if (bestS.myscore < temp.myscore)
                            bestS.myscore = temp.myscore;
                        if (bestS.Lookmeasure.score < temp.Lookmeasure.score)
                            bestS.Lookmeasure = temp.Lookmeasure;
                        if (bestS.MoveMeasure.score < temp.MoveMeasure.score)
                            bestS.MoveMeasure = temp.MoveMeasure;
                        if (bestS.HandsMeasure.score < temp.HandsMeasure.score)
                            bestS.HandsMeasure = temp.HandsMeasure;
                        if (bestS.Voicemeasure.score < temp.Voicemeasure.score)
                            bestS.Voicemeasure = temp.Voicemeasure;
                    }

                    if (fiveLastScores.Count > 1)
                    {
                        int change = fiveLastScores[0] - fiveLastScores[fiveLastScores.Count - 1];
                        if (change > 0)
                            progress = "בזמן האחרון השתפרת ב" + Math.Abs(change).ToString() + "%";
                        if (change < 0)
                            progress = "בזמן האחרון הייתה ירידה של " + Math.Abs(change).ToString() + "% בציון";
                    }
                    high.myscore = bestS.myscore;
                    allScore.Add(bestS.Voicemeasure);
                    allScore.Add(bestS.Lookmeasure);
                    allScore.Add(bestS.HandsMeasure);
                    allScore.Add(bestS.MoveMeasure);
                    sessionStorage.SetItem("best", bestS);
                    sessionStorage.SetItem("fiveLast", fiveLastScores);
                }
            }
            cardsLoad = true;
        }

    }
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        try
        {
            await JSRuntime.InvokeVoidAsync("stopS");
        }
        catch { }
    }
    protected void ShowAll()
    {
        if (!allPres)
            allPres = true;
        else
            allPres = false;
    }
    protected void moveall()
    {
        movecard++;
        moves = (movecard * 13).ToString() + "em";
    }
    protected void moveback()
    {
        movecard--;
        moves = (movecard * 13).ToString() + "em";
    }

    private async Task UploadFile(InputFileChangeEventArgs e)
    {
        var imageFiles = e.GetMultipleFiles();
        foreach (var file in imageFiles)
        {
            if (file.Size <= maxFileSize)
            {
                var buffer = new byte[file.Size];
                await file.OpenReadStream(maxFileSize).ReadAsync(buffer);
                var imageBase64 = Convert.ToBase64String(buffer);
                var saveResponse = await Http.PostAsJsonAsync("api/FireBase/upload/u"+ user.ID.ToString(), imageBase64);

                if (saveResponse.IsSuccessStatusCode == true)
                {
                    string resizeUrl = saveResponse.Content.ReadAsStringAsync().Result;
                    myFileImage = resizeUrl;
                    if (user.Pic != defultImg)
                    {
                        try {
                            var delResponse = await Http.PostAsJsonAsync("api/FireBase/deleteImages", user.Pic);
                        }
                        catch { }
                    }
                    user.Pic = myFileImage;
                    sessionStorage.SetItem("user", user);
                }
            }
        }
    }

    private async Task delimg()
    {

        var delResponse = await Http.PostAsJsonAsync("api/FireBase/deleteImages/u" + user.ID.ToString(), user.Pic);
        if (delResponse.IsSuccessStatusCode)
        {
            user.Pic = defultImg;
            sessionStorage.SetItem("user", user);
            myFileImage = defultImg;
        }
    }

    protected async Task pdf(Presentation p)
    {
        sessionStorage.SetItem("pres", p);
        sessionStorage.SetItem("user", user);
        sessionStorage.SetItem("url", "./MainPage");
        navigat.NavigateTo("./Pdf");
    }

    protected void closedel()
    {
        del = false;
    }
    protected void opendel()
    {
        del = true;

    }
    protected void p2del(Presentation p)
    {
        delP = p;
        del = true;

    }
    protected void delfromcard(Presentation p)
    {
        delP = p;
        delete();
    }
    protected async Task delete()
    {
        int place = presList.IndexOf(delP);
        fiveLastScores.RemoveAt(place);
        presList.Remove(delP);

        var getResponse = await Http.GetAsync("api/FireBase/DelEmpty/u" + user.ID.ToString() + "/" + delP.info.ID.ToString());
        if (movecard > 0)
            moveback();
        del = false;
        delP = new Presentation();

    }


#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IsLog logged { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private Blazored.SessionStorage.ISyncSessionStorageService sessionStorage { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private NavigationManager navigat { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JSRuntime { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private HttpClient Http { get; set; }
    }
}
#pragma warning restore 1591
