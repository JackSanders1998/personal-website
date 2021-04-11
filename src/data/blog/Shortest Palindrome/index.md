---
title: Shortest Palindrome
date: "2021-04-10T12:00:00.000Z"
image: './shortest_palindrome.png'
imageCredit: Jack Sanders
time: 12
categories: ['python3', 'LeetCode']
description: "You are given a string 's'. You can convert 's' to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation."
---

# My Thoughts
----------------
<p>
I came across this fun puzzle on LeetCode. It forced me to think about palindromes in a deeper way than the typical stack data structure problems that palindromes are often linked to.
<p><br>

# Check out the problem definition:
----------------
<p>
You are given a string <em>s</em>. You can convert <em>s</em> to a palindrome by adding characters in front of it.
</p>
<p>
Return <em>the shortest palindrome you can find by performing this transformation</em>.
</p>

<p>
	<strong>Example 1:</strong>
</p>
<p>
	<code>
		<strong>Input:</strong> s = "aacecaaa"<br>
		<strong>Output:</strong> "aaacecaaa"
	</code>

<p>
	<strong>Example 2:</strong></p>
<p>
	<code>
		<strong>Input:</strong> s = "abcd"<br>
		<strong>Output:</strong> "dcbabcd"
	</code>
</p>

<p>
	<strong>Constraints:</strong>
</p>
<p>
	<code>
		0 &lt;= s.length &lt;= 5 * 10<sup>4</sup><br>
		s consists of lowercase English letters only.
	</code>
</p><br>

# My Solution
----------------
<p>
Given a string, <em>s</em> that is not a palindrome, the quickest possible way to turn <em>s</em> into a palindrome is by adding the last letter of <em>s</em> to the front of <em>s</em>. i.e. <em>eep</em> -> <em><strong>p</strong>eep</em>. Knowing this, the solution is easy. Simply tack on letters to the beginning of <em>s</em>, starting with the last letter of <em>s</em> and working your way to the front. The worst case scenario is that <em>s</em> requires all but its first letter to to be turned into a palindrome. i.e. <em>asdf</em> -> <em><strong>fds</strong>fdsasdf</em>.

```
class Solution:

    def shortestPalindrome(self, s: str) -> str:
	# note: s[::-1] is the inverse of s
        if s == s[::-1]:
            return s
        reverse = s[::-1]
        total = reverse + s
        length = len(s)
        for i in range(length-1):
            output = reverse[0:(i+1)] + s
            if output == output[::-1]:
                return output
```
