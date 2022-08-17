export interface IEmployeesData {
    lastName: string,
    firstName: string,
    position: string,
    pesel: string,
    streetWithNumber?: string,
    postCode?: string,
    city?: string,
    phone?: string,
    email?: string
}

export const EmployeesData:IEmployeesData[] = [
    {  
        lastName: "Kowalczyk", 
        firstName: "Hanna", 
        position: "Księgowa", 
        pesel: "85122700122",
        streetWithNumber: "Piastowska 5/12",
        postCode: "80-385",
        city: "Gdańsk",
        phone: "555 123 552",
        email: "h.kowalczyk@wp.pl"
    },
    {
        lastName: "Nowak", 
        firstName: "Grzegorz", 
        position: "Kierownik Produkcji", 
        pesel: "02220512654"
    },
    {
        lastName: "Lato", 
        firstName: "Jakub", 
        position: "Technolog", 
        pesel: "98071560233"
    },
    {
        lastName: "Krakowiak", 
        firstName: "Mateusz", 
        position: "Pracownik Produkcji", 
        pesel: "95041265981"
    },
    {
        lastName: "Makowska", 
        firstName: "Aneta", 
        position: "Specjalista ds. handlowych", 
        pesel: "99060600754"
    },
    {
        lastName: "Małek", 
        firstName: "Anna", 
        position: "Specjalista ds. kadr", 
        pesel: "90232500741"
    },
    {
        lastName: "Rafik", 
        firstName: "Marek", 
        position: "Pracownik Produkcji", 
        pesel: "00312245731"
    },
    {
        lastName: "Robkowski", 
        firstName: "Dawid", 
        position: "Pracownik Produkcji", 
        pesel: "01322547738"
    },  
    {
        lastName: "Bukowska", 
        firstName: "Elżbieta", 
        position: "Pracownik Produkcji", 
        pesel: "98050704598"
    },
    {
        lastName: "Dąbrowski", 
        firstName: "Jan", 
        position: "Pracownik Produkcji", 
        pesel: "87051801555"
    },
    {
        lastName: "Dąbrowska", 
        firstName: "Halina", 
        position: "Pracownik Produkcji", 
        pesel: "87040801895"
    }
]
