using imrb.Models;
using System.Data;
using System.Data.SqlClient;



namespace imrb.StoredProcedures
{
    public static class StoredProcedures
    {
        public static string SqlconString = "Server=tcp:imrb.database.windows.net,1433;Initial Catalog=imrb;Persist Security Info=False;User ID=TheFlyingNose;Password=SamAlecWank$$$;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
        public static int CreateUser(User user)
        {
            try
            {
                int userId = 0;
                using (SqlConnection con = new SqlConnection(SqlconString))
                {
                    using (SqlCommand cmd = new SqlCommand("CreateUser"))
                    {
                        using (SqlDataAdapter sda = new SqlDataAdapter())
                        {
                            cmd.CommandType = CommandType.StoredProcedure;
                            cmd.Parameters.AddWithValue("@Username", user.Username);
                            cmd.Parameters.AddWithValue("@Password", user.Password);
                            cmd.Parameters.AddWithValue("@Email", user.Email);
                            cmd.Connection = con;
                            con.Open();
                            userId = Convert.ToInt32(cmd.ExecuteScalar());
                            con.Close();
                        }
                    }
                }
                return userId;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public static bool InsertActivationCode(int UserId, Guid ActivationCode)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(SqlconString))
                {
                    using (SqlCommand cmd = new SqlCommand("INSERT INTO UserActivation VALUES(@UserId, @ActivationCode)"))
                    {
                        using (SqlDataAdapter sda = new SqlDataAdapter())
                        {
                            cmd.CommandType = CommandType.Text;
                            cmd.Parameters.AddWithValue("@UserId", UserId);
                            cmd.Parameters.AddWithValue("@ActivationCode", ActivationCode);
                            cmd.Connection = con;
                            con.Open();
                            cmd.ExecuteNonQuery();
                            con.Close();

                            return true;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }

        }

        public static int CompareActivationCode(Guid activationCode)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(SqlconString))
                {
                    using (SqlCommand cmd = new SqlCommand("DELETE FROM UserActivation WHERE ActivationCode = @ActivationCode"))
                    {
                        using (SqlDataAdapter sda = new SqlDataAdapter())
                        {
                            cmd.CommandType = CommandType.Text;
                            cmd.Parameters.AddWithValue("@ActivationCode", activationCode);
                            cmd.Connection = con;
                            con.Open();
                            int rowsAffected = cmd.ExecuteNonQuery();
                            con.Close();
                            if (rowsAffected > 0)
                            {
                                return 2;
                            }
                            else
                            {
                                return 1;
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public static bool DeleteUser(int Id)
        {
            try
            {
                using (SqlConnection sqlCon = new SqlConnection(SqlconString))
                {
                    sqlCon.Open();
                    SqlCommand sql_cmnd = new SqlCommand("dbo.DeleteUser", sqlCon);
                    sql_cmnd.CommandType = CommandType.StoredProcedure;
                    sql_cmnd.Parameters.AddWithValue("@Id", Id);
                    sql_cmnd.ExecuteNonQuery();
                    sqlCon.Close();

                    return true;
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public static List<User> Getusers()
        {
            try
            {
                DataTable dataTable = new DataTable();

                using (SqlConnection sqlCon = new SqlConnection(SqlconString))
                {
                    sqlCon.Open();
                    SqlCommand sql_cmnd = new SqlCommand("dbo.GetUsers", sqlCon);
                    sql_cmnd.CommandType = CommandType.StoredProcedure;
                    var dataReader = sql_cmnd.ExecuteReader();
                    //sqlCon.Close();

                    List<User> users = new List<User>();
                    while (dataReader.Read())
                    {
                        User t = new User();
                        foreach (var prop in t.GetType().GetProperties())
                        {
                            var propType = prop.PropertyType;
                            prop.SetValue(t, Convert.ChangeType(dataReader[prop.Name].ToString(), propType));
                        }
                        users.Add(t);
                    }

                    return users;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public static string GetHash(int UserId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(SqlconString))
                {

                    con.Open();
                    SqlCommand command = new SqlCommand("SELECT Password FROM Users WHERE UserId = @UserId", con);
                    command.Parameters.AddWithValue("@UserId", UserId);
                    string result = (string)command.ExecuteScalar();

                    con.Close();

                    return result;
                }
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }

        public static int GetUserIdFromEmail(string email)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(SqlconString))
                {
                    con.Open();
                    SqlCommand command = new SqlCommand("Select UserId from Users where Email=@Email", con);
                    command.Parameters.AddWithValue("@Email", email);
                    int result = Convert.ToInt32(command.ExecuteScalar());

                    con.Close();

                    return result;
                }
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public static bool UpdateLastLogin(int UserId)
        {
            try
            {
                using (SqlConnection con = new SqlConnection(SqlconString))
                {
                    con.Open();
                    SqlCommand command = new SqlCommand("Update UserAdmin Set LastLogin = GETDATE() where UserId=@UserId", con);
                    command.Parameters.AddWithValue("@UserId", UserId);
                    command.ExecuteNonQuery();

                    con.Close();

                    return true;
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}
