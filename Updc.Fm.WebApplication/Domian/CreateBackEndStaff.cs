using Updc.Fm.WebApplication.Services;

namespace Updc.Fm.WebApplication.Domian
{
    public class CreateBackEndStaff
    {
        private string firstName;
        private string lastName;
        private string vEmail;
        private string phone;
        public string first_name
        {
            get
            {
                return firstName;
            }
            set
            {
                if(Validator.IsValidName(value))
                    firstName = value;
                else
                    throw new ArgumentException("Invalid input, must not include special charater(s).");
            }
        }
        public string last_name {
            get
            {
                return lastName;
            }
            set
            {
                if (Validator.IsValidName(value))
                    lastName = value;
                else
                    throw new ArgumentException("Invalid input, must not include special charater(s).");
            }
        }
        public string email { 
            get
            {
                return vEmail;
            }
            set
            {
                if (Validator.IsValidEmail(value))
                    vEmail = value;
                else
                    throw new ArgumentException("Invalid input, must be a valid email.");
            }
        }
        public string phone_number
        {
            get
            {
                return phone;
            }
            set
            {
                if (Validator.IsValidPhoneNumber(value))
                    phone = value;
                else
                    throw new ArgumentException("Invalid input, must be a valid telephone.");
            }
        }
        public string role { get; set; } = string.Empty;

    }
}
