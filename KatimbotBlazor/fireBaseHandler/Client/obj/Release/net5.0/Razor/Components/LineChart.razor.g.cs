#pragma checksum "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LineChart.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d7646b2130816197795bc500e81b7b943166e3ae"
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
    public partial class LineChart : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "canvas");
            __builder.AddAttribute(1, "id", 
#nullable restore
#line 3 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LineChart.razor"
             id

#line default
#line hidden
#nullable disable
            );
            __builder.AddAttribute(2, "style", "width:" + (
#nullable restore
#line 3 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LineChart.razor"
                               width

#line default
#line hidden
#nullable disable
            ) + ";" + " height:" + (
#nullable restore
#line 3 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LineChart.razor"
                                              height

#line default
#line hidden
#nullable disable
            ));
            __builder.CloseElement();
            __builder.AddMarkupContent(3, "\r\n");
            __builder.OpenElement(4, "div");
            __builder.AddAttribute(5, "style", "width:" + " " + (
#nullable restore
#line 4 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LineChart.razor"
                    width

#line default
#line hidden
#nullable disable
            ) + ";display:" + " flex;justify-content:" + " space-between;");
#nullable restore
#line 5 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LineChart.razor"
     foreach (int num in nums)
    {

#line default
#line hidden
#nullable disable
            __builder.OpenElement(6, "span");
#nullable restore
#line 7 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LineChart.razor"
__builder.AddContent(7, num);

#line default
#line hidden
#nullable disable
            __builder.CloseElement();
#nullable restore
#line 8 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LineChart.razor"
    }

#line default
#line hidden
#nullable disable
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 12 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\LineChart.razor"
       
        [Parameter]
        public string width { get; set; }
        [Parameter]
        public string height { get; set; }
        [Parameter]
        public string id { get; set; }
        [Parameter]
        public List<int> nums { get; set; }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        List<int> all = nums;
            await JSRuntime.InvokeVoidAsync("drawChart", id, all);
        

    }



#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JSRuntime { get; set; }
    }
}
#pragma warning restore 1591