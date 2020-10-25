using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeesAPI.Models
{
    public class Employee
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string SecondName { get; set; }
        public string Position { get; set; }
        public double Salary { get; set; }
        
    }
}
