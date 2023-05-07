// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace fireBaseHandler.Client.Shared
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using System.Net.Http.Json;

#line default
#line hidden
#nullable disable
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
#line 11 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\_Imports.razor"
using fireBaseHandler.Client.Components;

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
#line 1 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Shared\NavMenu.razor"
using fireBaseHandler.Shared.Entities;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Shared\NavMenu.razor"
using fireBaseHandler.Client.Services;

#line default
#line hidden
#nullable disable
    public partial class NavMenu : global::Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(global::Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#nullable restore
#line 85 "C:\Users\Aluma\Documents\katombot1_full\KatimbotBlazor\fireBaseHandler\Client\Shared\NavMenu.razor"
       
    string c = "hide";
    bool log = false;
    LogInData user;
    string navClass = "closeH";
    bool open = false;
    string a = "";
    protected void switchMenu()
    {
        if (open == false)
        {
            open = true;
            navClass = "openH";
        }
        else
        {
            open = false;
            navClass = "closeH";
        }
    }
    protected override async Task OnInitializedAsync()
    {
        navigat.LocationChanged += LocationChanged;
        //logged.OnChange += check;
    }
    private void check()
    {
        user = sessionStorage.GetItem<LogInData>("user");
        if (user != null)
            log = true;
        else
            log = false;
    }
    protected override async void OnAfterRender(bool firstRender)
    {
        //   navClass = "closeH";
        //  open = false;
        user = sessionStorage.GetItem<LogInData>("user");
        if (user != null)
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("login");
                log = true;
            }
            catch
            {

            }
        }
        else
        {
            try
            {
                await JSRuntime.InvokeVoidAsync("logout");
                log = false;
            }
            catch { };
        }
    }
    protected  void LocationChanged(object sender, LocationChangedEventArgs e)
    {
        open = false;
        navClass = "closeH";


    }
    protected void showAbout()
    {
        open = false;
        navClass = "closeH";
        c = "show";
    }
    protected void hideabout()
    {
        c = "hide";
    }
    protected private async Task logout()
    {
        var user = sessionStorage.GetItem<LogInData>("user");
        if (user != null)
        {
            sessionStorage.RemoveItem("user");
            log = false;
            try
            {

                await JSRuntime.InvokeVoidAsync("logout");
            }
            catch { }
            navigat.NavigateTo("./");
        }
        else
        {

            navigat.NavigateTo("./LogIn");

        }
    }
    protected private void login()
    {

        navigat.NavigateTo("./LogIn");
    }


#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private Services.IsLog logged { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JSRuntime { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private NavigationManager navigat { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private Blazored.SessionStorage.ISyncSessionStorageService sessionStorage { get; set; }
    }
}
#pragma warning restore 1591