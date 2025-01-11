<div align='center'>

# <img src="https://github.com/user-attachments/assets/44daf431-c9ae-44f3-9fc1-237761608cca" alt="logo" width=300/>

</div>

### About the Project
> You are tasked with creating a simple React application called "Item List Manager" that displays a list of items and allows users to add new items to the list. The items will be displayed in an unordered list, and there will be an input field along with a button to add new items to this list.



### Tech Stack

![Static Badge](https://img.shields.io/badge/AWS-101010?logo=amazonwebservices&logoColor=%232496ED)  ![Static Badge](https://img.shields.io/badge/S3-101010?logo=amazons3)![Static Badge](https://img.shields.io/badge/IAM-101010?logo=amazoniam) ![Static Badge](https://img.shields.io/badge/ReactJS-101010?logo=react&logoColor=%2361DAFB)  ![Static Badge](https://img.shields.io/badge/HTML-101010?logo=html5&logoColor=%23E34F26) ![Static Badge](https://img.shields.io/badge/JavaScript-101010?logo=javascript&logoColor=%23F7DF1E) ![Static Badge](https://img.shields.io/badge/CSS-101010?logo=css3&logoColor=%231572B6) 


### Contributing

1. Fork the Project
2. Clone your forked repository

```sh
 git clone https://github.com/<USER_NAME>/krowdreactapp.git
```

3. Now go ahead and create a new branch and move to the branch
   ```sh
   git checkout -b fix-issue-<ISSUE-NUMBER>
   ```
4. After you have added your changes, follow the following command chain

   - Check the changed files

   ```sh
    git status -s
   ```

   - Add all the files to the staging area
     ```sh
     git add .
     ```
     or
     ```sh
     git add <file_name1> <file_name2>
     ```
   - Commit your changes

   ```sh
    git commit -m "<EXPLAIN-YOUR_CHANGES>"
   ```

5. Push your changes
   ```sh
   git push origin fix-issue-<ISSUE-NUMBER>
   ```
6. Open a Pull Request
   > - Wait for the PR to be reviewed and merged.
   > - Happy Coding!

## Requiremenmts

Detailed Requirements

When the application loads, it should display an empty list.
The input field should accept user text input.
When the button is clicked:
The text from the input field should be added to the list.
The input field should be cleared.
If the input field is empty and the button is clicked, nothing should be added to the list.


Sample Interaction
Initial State

The list is empty.
The input field is empty.
User Action 1

User types "First Item" in the input field.
User clicks "Add Item" button.
The list displays "First Item".
User Action 2

User types "Second Item" in the input field.
User clicks "Add Item" button.
The list displays:
"First Item"
"Second Item"
