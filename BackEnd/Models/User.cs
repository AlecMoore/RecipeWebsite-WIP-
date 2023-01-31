namespace imrb.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }

        public User(int id, string email, string password, string username)
        {
            Id = id;
            Email = email;
            Password = password;
            Username = username;
        }

        public User()
        {
            Id= 0;
        }
    }
}