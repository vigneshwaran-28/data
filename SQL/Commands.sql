/*

1. show databases;
list out all the databases it has

2.Create database db_name;
create the database with the specified name

3.use db_name;
It uses the cureent databases of which you are giving 

4.show tables;
It list out all the tables from the certain databases

5.create table tb_name;
If you want to create the table you can use this command to create the table

6.Inserting values
    i It is based on entering values directly rather than entering the 
specific fields in it 
    ex:
    ===> insert into tb_name values("values","of","different fields");

    ii It is based on specifying the certain fields in which it needs to 
add values to specific attributes in the table .
    ex:
    ===> insert into tb_name(field1,field2) values("values of field1","values of field2");

7.select * from tb_name;
    It displays all the details of the table

8.show columns from table_name;
    It shows all the column names with the specified size

9.describe table_name;
    Same as the show columns command which is in above

10.select field1 from table_name;
    If you want to retrieve the specific columns from the table 

11.select * from demo where name="vignesh";
    If you need to filter out something then you can go for where keyword

12.select * from demo where id is null;
    If you want to check whether the field has some null values in it , then it 
better to go for is rather than specifying and checking with is

13.select * from demo where id>1 and name>'a';
    You can combine different things into one line where we can go for many
conditions it may be either 'or','and'

14. alter table demo add year date;
    If you want to add one more field to the table then you can go for alter
and add command in it.
    Ex:  ===>alter table demo add (death date,dob date);

15.alter table demo drop column field_name;
    If you need to drop some certain column from the table then you can go for this

16.update demo set year="2020-02-29" where id=1;
    If you want to update some specific row then u can go for it by using set keyword

17.select * from demo where(year(now())-year(year))<=3;
    year=>returns the year of the specified date
    now()=>functions returns the current date and time format

18.select * from demo order by year asc;
    If you want to order in the manner of ascending then you can go for it

19.select * from demo order by year desc;
    If you want to order in the manner of descending then you can go for it

20.select * from demo order by year desc limit 1;
    if you want to restrict the result to be of certain limit then we can use this

21.update Salary set sex=if(sex='m','f','m');
    if you want to check something and u need to update based on that then going for if is good

22.select * from demo group by name order by year asc;
    If you need to eliminate some duplicate data then you can use group by 

23.select salary,name from compare,demo where compare.id=demo.id;
    If you need to get values from different tables based on the certain conditions then it is efficient
way

24.delete from demo where id=3;
    If you need to delete ceertain row then you can go for this

25.delete from compare;
    It will delete entire table

26.select * from demo where name like "%s";
    If you have only certain part of text and you need to want some extra things then you can go
for like keyword and it can be like if %s  is front means ,that it ends with s;
    If the s% is in last means,it begins with s

27.select name from demo where name regexp '^v';
    if you need to have some output which has starting point of certain things means then it is responsible
for that
    select name from demo where name regexp 'h$';
If you want something to be end with certain thing then you can go for $ symbol

  '^' ==> Beginning of the string
  '$' ==> end of the string

28. select name from demo where name regexp '^v|h$';
    If you want to specify various conditions in a line then it better to go for | 

29.alter table compare add id int first;
    If you need to add the field into the first of the table then it better to for it

30.alter table compare add id int after name;
    If you need to add the field after the specified field then we can use it

31.alter table compare modify id char(10);
    If you need to modify the data type of the fields then we can use this

32.alter table compare rename to verify;
    If you need to rename the table name then it better to go for this

33.Index :
    Rather loading the entire table into the memory and returning the result, we can just do some 
storage in the local machine and can retrieve data , which will be efficient in select process,
whereas in the process of updation and insertion it is quit difficult to maintain

34.Creating Index:
    create unique index index_name on demo(name);

35.alter table demo add primary key(year);
    If you want to add primary key then you can use this

36.create temporary table temp(name varchar(20));
    If you want to have some tables temporarily and it will expires over session 

37.show create table demo \g;
    If you wanted to clone then you can get the code for the creation using this command


Joins
-----

1.Inner Joins
--------------
The INNER JOIN keyword selects all rows from both the tables as long as the condition is satisfied. This keyword will create the result-set by combining all rows from both the tables where the condition satisfies i.e value of the common field will be the same. 




*/
