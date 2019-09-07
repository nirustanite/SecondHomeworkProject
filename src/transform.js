
//functions that groups persons by age 
groupAdultsByAgeRange = (persons) => {
    return persons.filter((persons) => persons.age >= 18)
           .reduce((result, person) => {
            const age=person.age;
            if(age <= 20)
            {
                if(!result['20 and younger'])
                {
                    result['20 and younger'] = [];
                }
                result['20 and younger'].push(person);
            }
            else if(age >= 21 && age <= 30)
            {
                if(!result['21-30'])
                {
                    result['21-30'] = [];
                }
                result['21-30'].push(person);
            }
            else if(age >= 31 && age <= 40)
            {
                if(!result['31-40'])
                {
                    result['31-40'] = [];
                }
                result['31-40'].push(person);
            }
            else if(age >= 41 && age <= 50)
            {
                if(!result['41-50'])
                {
                    result['41-50'] = [];
                }
                result['41-50'].push(person);
            }
            else
            {
                if(!result['51 and older'])
                {
                    result['51 and older'] = [];
                }
                result['51 and older'].push(person);  
            }
            return result;
           }, 
           {})
}


module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;