#pragma checksum "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "16fa76815fae0160bb9f8714636b45bdf80b6277"
// <auto-generated/>
#pragma warning disable 1591
namespace fireBaseHandler.Client.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using System.Net.Http.Json;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using Microsoft.AspNetCore.Components.WebAssembly.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler.Client;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler.Client.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler.Client.Components;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler;

#line default
#line hidden
#nullable disable
#nullable restore
#line 13 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 14 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using BlazorAnimate;

#line default
#line hidden
#nullable disable
#nullable restore
#line 15 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler.Client.Services;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/")]
    public partial class Index : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenComponent<BlazorAnimate.Animate>(0);
            __builder.AddAttribute(1, "Animation", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<BlazorAnimate.IAnimation>(
#nullable restore
#line 8 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                    Animations.FadeUp

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(2, "Duration", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.TimeSpan?>(
#nullable restore
#line 8 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                                                 TimeSpan.FromSeconds(0.50)

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(3, "Delay", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.TimeSpan?>(
#nullable restore
#line 8 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                                                                                    TimeSpan.FromSeconds(0.25)

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(4, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenElement(5, "div");
                __builder2.AddAttribute(6, "class", "bg section");
                __builder2.OpenComponent<BlazorAnimate.Animate>(7);
                __builder2.AddAttribute(8, "Animation", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<BlazorAnimate.IAnimation>(
#nullable restore
#line 10 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                            Animations.FadeDown

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(9, "Duration", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.TimeSpan?>(
#nullable restore
#line 10 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                                                           TimeSpan.FromSeconds(0.50)

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(10, "Delay", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.TimeSpan?>(
#nullable restore
#line 10 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                                                                                              TimeSpan.FromSeconds(1)

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(11, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(12, @"<div class=""row m-0""><div id=""logoBig"" class=""m-auto""><div id=""dot""></div>
                    <h1 class>קתימבוט</h1>
                    <h2>
                        הערכת מיומנויות הדרכה באמצעות AI
                    </h2>

                    <a href=""./SignUp"" class=""btn-primary mb-2 align-self-center align-self-lg-end p-3"">
                        אני רוצה לנסות!
                    </a></div></div>");
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(13, "\r\n        ");
                __builder2.OpenComponent<BlazorAnimate.Animate>(14);
                __builder2.AddAttribute(15, "Animation", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<BlazorAnimate.IAnimation>(
#nullable restore
#line 27 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                            Animations.FadeUp

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(16, "Duration", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.TimeSpan?>(
#nullable restore
#line 27 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                                                         TimeSpan.FromSeconds(0.50)

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(17, "Delay", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.TimeSpan?>(
#nullable restore
#line 27 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                                                                                            TimeSpan.FromSeconds(1.5)

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(18, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(19, @"<div class=""row mt-5 mb-3""><div style=""margin-left:3em""></div>
                <div class=""col-12 col-sm-5 offset-lg-1 offset-md-0"" style=""padding: 0 4%""><h4>מה זה קתימבוט?</h4>
                    <p style=""width: 95%;"">
                        קתימבוט היא מערכת להערכה ואימון של מיומנויות הדרכה. בעזרת קתימבוט ניתן לתרגל פרזנטציה ולקבל משוב מיידי לפי כל הכללים.
                        כל מה שצריך זה את הצמיד שלנו, מצלמה ומיקרופון, את כל השאר הקתימבוט יעשה.
                    </p></div>

                <div class=""col-12 col-sm-4 offset-lg-1 offset-md-0""><h4>איך להשתמש בקתימבוט?</h4>
                    <div class=""h-100 howto""><div><img src=""./images/start.svg"">
                            <p>להפעיל באתר</p></div>
                        <img src=""./images/arrow-down.svg"" style=""transform: translateY(1em);"">
                        <div><img src=""./images/connect.svg"">
                            <p>להתחבר לצמיד</p></div>
                        <img src=""./images/arrow-down.svg"" style=""transform: translateY(-0.5em) scale(1,-1) rotate(45deg);"">
                        <div style="" margin: 0 1%;""><img src=""./images/present.svg"">
                            <p>להעביר פרזנטציה </p></div>
                        <img src=""./images/arrow-down.svg"" style=""transform: translateY(1em);"">
                        <div><img src=""./images/score.svg"">
                            <p>לקבל משוב</p></div></div></div></div>");
                }
                ));
                __builder2.CloseComponent();
                __builder2.CloseElement();
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(20, "\r\n");
            __builder.OpenComponent<BlazorAnimate.Animate>(21);
            __builder.AddAttribute(22, "Animation", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<BlazorAnimate.IAnimation>(
#nullable restore
#line 68 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                    Animations.FadeIn

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(23, "Duration", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.TimeSpan?>(
#nullable restore
#line 68 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                                                 TimeSpan.FromSeconds(0.5)

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(24, "Delay", global::Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.TimeSpan?>(
#nullable restore
#line 68 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                                                                                   TimeSpan.FromSeconds(0.5)

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(25, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenElement(26, "div");
                __builder2.AddAttribute(27, "style", "margin: 7em 0");
                __builder2.AddMarkupContent(28, "<h3 class=\"mb-3 headlines\">למה קתימבוט?</h3>\r\n        ");
                __builder2.OpenElement(29, "div");
                __builder2.AddAttribute(30, "class", "row mb-5 m-0 d-flex align-content-center justify-content-center");
                __builder2.OpenComponent<fireBaseHandler.Client.Components.WhyCard>(31);
                __builder2.AddAttribute(32, "imgsrc", "./images/objective.svg");
                __builder2.AddAttribute(33, "name", "אובייקטיבי");
                __builder2.AddAttribute(34, "txt", "המשוב מחושב על פי המדדים שלך ולא לפי שום דבר שנתון לפרשנות");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(35, "\r\n            ");
                __builder2.OpenComponent<fireBaseHandler.Client.Components.WhyCard>(36);
                __builder2.AddAttribute(37, "imgsrc", "./images/fast.svg");
                __builder2.AddAttribute(38, "name", "מהיר");
                __builder2.AddAttribute(39, "txt", "המשוב מתקבל מיד לאחר סיום הפרזנטציה");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(40, "\r\n            ");
                __builder2.OpenComponent<fireBaseHandler.Client.Components.WhyCard>(41);
                __builder2.AddAttribute(42, "imgsrc", "./images/snowflake.svg");
                __builder2.AddAttribute(43, "name", "אישי");
                __builder2.AddAttribute(44, "txt", "הקתימבוט מתאים את עצמו אליך ונותן לך המלצות אישיות");
                __builder2.CloseComponent();
                __builder2.CloseElement();
                __builder2.CloseElement();
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(45, "\r\n");
            __builder.OpenComponent<fireBaseHandler.Client.Components.TipRow>(46);
            __builder.CloseComponent();
#nullable restore
#line 82 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
 if (block)
{

#line default
#line hidden
#nullable disable
            __builder.OpenElement(47, "div");
            __builder.AddAttribute(48, "class", "block");
            __builder.AddMarkupContent(49, "<h3>\r\n        איזה כיף שבאת!\r\n    </h3>\r\n    אנחנו רואים שנכנסת לקתימבוט מהנייד. כדי לקבל את חוויית השימוש המלאה, אנחנו ממליצים להיכנס לקתימבוט דרך מחשב.\r\n    ");
            __builder.OpenElement(50, "a");
            __builder.AddAttribute(51, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 90 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
                   ()=>block= false

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(52, "class", "btn-primary");
            __builder.AddAttribute(53, "style", "text-decoration: none;width:100%");
            __builder.AddMarkupContent(54, "לקתימבוט");
            __builder.CloseElement();
            __builder.CloseElement();
#nullable restore
#line 93 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
}

#line default
#line hidden
#nullable disable
        }
        #pragma warning restore 1998
#nullable restore
#line 95 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Pages\Index.razor"
       
    bool block = true;
    protected override async Task OnInitializedAsync()
    {
        bool back = sessionStorage.GetItem<bool>("here");
        if (back)
            block = false;
        else
            sessionStorage.SetItem("here", true);
    }
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        try
        {
            await JSRuntime.InvokeVoidAsync("stopS");
            var mywidth = await JSRuntime.InvokeAsync<int>("getwidth");
            sessionStorage.SetItem("width", mywidth);

        }
        catch { }

        sessionStorage.SetItem("gototip", "./");

    }



#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private Blazored.SessionStorage.ISyncSessionStorageService sessionStorage { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JSRuntime { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private NavigationManager navigat { get; set; }
    }
}
#pragma warning restore 1591
