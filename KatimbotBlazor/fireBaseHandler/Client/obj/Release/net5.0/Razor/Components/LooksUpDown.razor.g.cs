#pragma checksum "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LooksUpDown.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "77fb5c35a2941780e8d3b895bb69cebe2e29b729"
// <auto-generated/>
#pragma warning disable 1591
namespace fireBaseHandler.Client.Components
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
    public partial class LooksUpDown : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddAttribute(1, "style", "display: flex;align-items: center;");
            __builder.AddMarkupContent(2, "<img src=\"./images/verticalLook.svg\" style=\"height: 4em; transform: scaleX(-1);\">\r\n    ");
            __builder.AddMarkupContent(3, @"<div class=""flex-column d-flex""><img src=""./images/arrowlong.svg"" style=""width: 2em; transform: scale(-1);"">
            <img src=""./images/arrowshort.svg"" style=""width: 2em; transform: rotate(90deg); "">
            <img src=""./images/arrowlong.svg"" style=""width: 2em; transform: scale(-1) rotate(-90deg);""></div>

    ");
            __builder.OpenElement(4, "div");
            __builder.AddAttribute(5, "class", "flex-column d-flex");
            __builder.AddAttribute(6, "style", "gap: 0.5em; transform: translate(-0.5em, 0.5em);");
            __builder.OpenElement(7, "p");
            __builder.AddAttribute(8, "style", "font-size:12pt;");
#nullable restore
#line 19 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LooksUpDown.razor"
__builder.AddContent(9, Up);

#line default
#line hidden
#nullable disable
            __builder.AddMarkupContent(10, "% למעלה");
            __builder.CloseElement();
            __builder.AddMarkupContent(11, "\r\n        ");
            __builder.OpenElement(12, "p");
            __builder.AddAttribute(13, "style", "font-size:12pt;");
#nullable restore
#line 20 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LooksUpDown.razor"
__builder.AddContent(14, Vcenter);

#line default
#line hidden
#nullable disable
            __builder.AddMarkupContent(15, "% למרכז");
            __builder.CloseElement();
            __builder.AddMarkupContent(16, "\r\n        ");
            __builder.OpenElement(17, "p");
            __builder.AddAttribute(18, "style", "font-size:12pt;");
#nullable restore
#line 21 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LooksUpDown.razor"
__builder.AddContent(19, Down);

#line default
#line hidden
#nullable disable
            __builder.AddMarkupContent(20, "% למטה");
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 30 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LooksUpDown.razor"
       
    [Parameter]
    public int Up { get; set; }
    [Parameter]
    public int Vcenter { get; set; }
    [Parameter]
    public int Down { get; set; }

    //protected override async Task OnAfterRenderAsync(bool firstRender)
    //{
    //    await JSRuntime.InvokeVoidAsync("drawPie", "lookup", Up, Vcenter);
    //}



#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JSRuntime { get; set; }
    }
}
#pragma warning restore 1591