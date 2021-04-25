Part 1a.
1. values added: 20  
The line is printed because the "var" keyword has no block scope. Even if it has block-scope, the variable result would still be defined and print.  

2. final result: 20  
Although the variable, result, is being refernced outside of the if block, the "var" keyword has no block-scope, so result is defined outside of the if-scope.  

3. values added: 20  
The variable, result, is being referenced inside of the if-block with "let" keyword. Thus, it is able to print the string.  

4. ReferenceError: result is not defined
The variable, result, is being referenced outside of the if-blcok with "let" keyword. Thus, the result is not defined.  

5. error, can't reassign the constant!
The variable, result, is initialized with a "const" keyword. Thus, changing it will throw an error.  

6. error, can't reassign the constant!
The variable, result, is initialized with a "const" keyword. Thus, changing it will throw an error.  
  
  
Part 1b.
1. It will print 3 (prices.length) which is the value of variable, i, because the variable is defined with the "var" keyword which will exists outside the for-loop block. Thus, i will be defined at line 12.  
  
2. It will print the value of discountedPrice (150) because the var keyword has no block scope. The "var" is either function-scoped or global-scoped.  Thus, discountedPrice is defined at line 13.  

3. The value of the variable, finalPrice (150), will be printed because the "var" keyword has no block-scope. Thus, finalPrice is defined at line 13.  
  
4. The function will return the value of the variable, discounted, because the variable is defined in that scope. The discounted price will have an array of items [50,100,150].  
  
5. ReferenceError: i is not defined  
 The scope of variable i is only defined within the for-loop block. Thus, trying to access i outside of the function will give an error.  

6. ReferenceError: discountedPrice is not defined  
The variable, discountedPrice, defined with "let" keyword is only defined within the scope of the for-loop block. Thus, acessing the variabled outside of the scope will give an error.  

7. It will print the value of the variable, finalPrice, which is 150 since its defined within scope of the function.  
  
8. It will print the value of discounted which is an array of items [50,100,150] because its defined within scope of the function.

9. ReferenceError: i is not defined  
 The scope of variable i is only defined within the for-loop block. Thus, trying to access i outside of the function will give an error.  

10. It will print the value of length which is 3 since it's defined within scope of function and was unchanged.  
  
11. It will print the value of discounted, which is a new array of items [50,100,150]. Const does not give an error here because we don't try to change it after its intialization, we create a new initialization after every iteration.
  
12. 
A. student.name  
B. student['Grad Year']  
C. student.greeting()  
D. student['Favorite Teacher'].name  
E. student.courseLoad[0]  
  
13. Arithmetics 
A. '32' since integers map to their exact string representations for concatenation  
B. 1 since strings maps to their exact numerical representions for subtraction  
C. 3 since null maps to 0  
D. '3null' since null maps to its string representation for concatenation  
E. 4 since true maps to 1  
F. 0 since false and null maps 0  
G. '3undefined' since undefined maps to its string representation for concatenation  
H. Nan since undefined maps to Nan  
  
14. Comparison  
A. true since integers map to their exact numerical represention  
B. false since its a string comparison and the first character of string '2' is greater than '1'  
C. true since string '2' maps to its exact numerical representation  
D. false because it's a strict equality operatory and it checks without type conversion  
E. true because false maps to 1 and 1 does not equal to 2  
F. true because Boolean(2) equates to true and true===true is true  
  
15. The == is a regular equaltiy check and it cannot differentiate between types due to type conversion. For example, it cannot differentiate between 0 and false or 2 and '2'. On the other hand, the === is a strict equality operator which checks equality without type conversion. Thus, it can differentaite between 0 and false or 2 and '2'.  
  
16. Check part1b-question16.js file

17. The function takes in an array to be modified, and a function on how the array is going to be modified. The function call modifyArray([1,2,3], doSomething) first creates a new array. Then, the for-loop will loop through each element in the original array, multiplied by 2 due to the callback function, pushed into the new array, and returns [2,4,6].  

18. Check part1b-question18.js file

19. 1 4 3 2

