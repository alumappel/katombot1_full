#pragma checksum "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\AnchorNavigation.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5d75c65f5a6b9c7024ea86f6344d8dfb1d51f8da"
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
    public partial class AnchorNavigation : Microsoft.AspNetCore.Components.ComponentBase, IDisposable
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#nullable restore
#line 19 "C:\Users\נטע\Documents\תואר\שנה ג\idk\fireBaseHandler\Client\Components\AnchorNavigation.razor"
       
    protected override void OnInitialized()
    {
        NavigationManager.LocationChanged += OnLocationChanged;
    }

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await ScrollToFragment();
    }

    public void Dispose()
    {
        NavigationManager.LocationChanged -= OnLocationChanged;
    }

    private async void OnLocationChanged(object sender, LocationChangedEventArgs e)
    {
        await ScrollToFragment();
    }

    private async Task ScrollToFragment()
    {
        var uri = new Uri(NavigationManager.Uri, UriKind.Absolute);
        var fragment = uri.Fragment;
        if (fragment.StartsWith('#'))
        {
            // Handle text fragment (https://example.org/#test:~:text=foo)
            // https://github.com/WICG/scroll-to-text-fragment/
            var elementId = fragment.Substring(1);
            var index = elementId.IndexOf(":~:", StringComparison.Ordinal);
            if (index > 0)
            {
                elementId = elementId.Substring(0, index);
            }

            if (!string.IsNullOrEmpty(elementId))
            {
                await JSRuntime.InvokeVoidAsync("BlazorScrollToId", elementId);
            }
        }
    }

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private NavigationManager NavigationManager { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JSRuntime { get; set; }
    }
}
#pragma warning restore 1591
