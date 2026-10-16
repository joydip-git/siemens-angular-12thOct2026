using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Web.WebView2.Core;

namespace WpfAppAngularHost
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            HostPmsApp();
        }

        private async Task HostPmsApp()
        {
            await pmsAppWV2.EnsureCoreWebView2Async();
            pmsAppWV2.CoreWebView2.SetVirtualHostNameToFolderMapping(
                "siemens.com",
                $"{Environment.CurrentDirectory}//pms-app//browser",
                CoreWebView2HostResourceAccessKind.DenyCors
                );

            pmsAppWV2.Source = new Uri("http://siemens.com/index.html");
        }
    }
}