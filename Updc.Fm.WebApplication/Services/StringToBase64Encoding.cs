namespace Updc.Fm.WebApplication.Services
{
    public static class StringToBase64Encoding
    {
        public static string EncodeToBase64(string text)
        {
            var convertTextBytes = System.Text.Encoding.UTF8.GetBytes(text);
            return System.Convert.ToBase64String(convertTextBytes);
        }
    }
}
