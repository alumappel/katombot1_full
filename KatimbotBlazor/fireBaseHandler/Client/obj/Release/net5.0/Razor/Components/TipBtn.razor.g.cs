#pragma checksum "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\TipBtn.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c5e73a7c633b087654d857dad924264fff9774ad"
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
    public partial class TipBtn : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "a");
            __builder.AddAttribute(1, "href", 
#nullable restore
#line 2 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\TipBtn.razor"
         anchor

#line default
#line hidden
#nullable disable
            );
            __builder.AddAttribute(2, "class", "goldBtn btn-primary");
            __builder.AddAttribute(3, "style", "color: var(--white);padding: 2em; width: 7.5em; gap: 1em; text-align: right; color: var(--white); ");
            __builder.OpenElement(4, "span");
            __builder.AddAttribute(5, "class", 
#nullable restore
#line 3 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\TipBtn.razor"
                  src

#line default
#line hidden
#nullable disable
            );
            __builder.AddAttribute(6, "style", "font-size:2em; color:var(--white)");
            __builder.CloseElement();
            __builder.AddMarkupContent(7, "\r\n    ");
#nullable restore
#line 4 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\TipBtn.razor"
__builder.AddContent(8, name);

#line default
#line hidden
#nullable disable
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 6 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\TipBtn.razor"
       
    [Parameter]
    public string anchor { get; set; }
    [Parameter]
    public string name { get; set; }
    [Parameter]
    public string src { get; set; }

#line default
#line hidden
#nullable disable
    }
}
#pragma warning restore 1591
