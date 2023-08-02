using System.Text.RegularExpressions;

namespace Updc.Fm.WebApplication.Services
{
    public static class Validator
    {
        public static bool IsValidName(string name)
        {
            string pattern = "^[A-Za-z]$";
            return Regex.IsMatch(name, pattern);
        }
        public static bool IsValidOther(string other)
        {
            string pattern = "^[A-Za-z0-9 ]+$";
            return Regex.IsMatch(other, pattern);
        }

        public static bool IsValidId(string id)
        {
            string pattern = @"^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$";
            return Regex.IsMatch(id, pattern);
        }

        public static bool IsValidAddress(string address)
        {
            string pattern = @"^[\w\s\-.,']+$";
            return Regex.IsMatch(address, pattern);
        }

        public static bool IsValidPhoneNumber(string phoneNumber)
        {
            string pattern = @"^[0-9]{11}$";
            return Regex.IsMatch(phoneNumber, pattern);
        }

        public static bool IsValidEmail(string email)
        {
            string pattern = @"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$";
            return Regex.IsMatch(email, pattern);
        }
    }
}
