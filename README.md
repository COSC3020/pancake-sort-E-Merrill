# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

### Pancake Comparisons

In terms of comparisons of pancakes (number of elements compared,) the asymptotic runtime ($\theta$) of the algorithm is equivalent to:  

$\sum_{k = 1}^n k$  where n is the length of the array. This sum can be simplified using the summation formula $\frac{n*(n+1)}{2}, which ends up simplifying the aymptotic runtime down to $\theta (n^2)$

### Number of flips

Every iteration, the function will flip the array twice, no matter what. It is then a case of how many times these flips will occur. The way it works is by finding the largest element, flipping it to the front, then to the end, then doing it again, but without including the last element of the array, or (n-1). Since this would start at the length of the array, n, the formula is 2n, which has an asymptotic runtime of $\theta (n)$


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

Gage Hepworth helped me figure out what the algorithm should do to sort (flip largest to front, flip to back)
