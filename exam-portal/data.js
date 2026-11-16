const DB = {
  "u1": {
    "name": "Unit 1: Lists, Linked Lists & Radix Sort",
    "mcq": [
      {
        "id": "u1_m1",
        "q": "What is an Abstract Data Type (ADT)?",
        "o": [
          "A mathematical model of data with a set of operations, independent of implementation",
          "A fixed memory layout for storing data",
          "A C struct that contains member functions",
          "A primitive type defined by the compiler"
        ],
        "a": 0
      },
      {
        "id": "u1_m2",
        "q": "What does an ADT hide from the user?",
        "o": [
          "The names of its operations",
          "How the data and operations are implemented",
          "The type of values it stores",
          "The purpose of the data structure"
        ],
        "a": 1
      },
      {
        "id": "u1_m3",
        "q": "What is the worst-case time complexity of inserting an element at the beginning of an array-based list of n elements?",
        "o": [
          "O(1)",
          "O(log n)",
          "O(n\u00b2)",
          "O(n)"
        ],
        "a": 3
      },
      {
        "id": "u1_m4",
        "q": "Which of the following is NOT a typical operation of the List ADT?",
        "o": [
          "Insert an element at a given position",
          "Delete an element from the list",
          "Evaluate a postfix expression",
          "Find the position of an element"
        ],
        "a": 2
      },
      {
        "id": "u1_m5",
        "q": "Which is a major disadvantage of the array-based implementation of a list?",
        "o": [
          "The maximum size must be known in advance",
          "Elements cannot be accessed using an index",
          "Each element needs an extra pointer",
          "It cannot store integer values"
        ],
        "a": 0
      },
      {
        "id": "u1_m6",
        "q": "Which is an advantage of a linked list over an array-based list?",
        "o": [
          "Faster random access by index",
          "Insertion and deletion without shifting elements",
          "Less memory used per element",
          "Elements stored in contiguous memory"
        ],
        "a": 1
      },
      {
        "id": "u1_m7",
        "q": "In a singly linked list, what does the next pointer of the last node contain?",
        "o": [
          "The address of the first node",
          "The address of the previous node",
          "NULL",
          "The data of the first node"
        ],
        "a": 2
      },
      {
        "id": "u1_m8",
        "q": "What does each node of a doubly linked list contain?",
        "o": [
          "Data and a single next pointer",
          "Data, a prev pointer and a next pointer",
          "Data and two data fields",
          "Only prev and next pointers without data"
        ],
        "a": 1
      },
      {
        "id": "u1_m9",
        "q": "What is the time complexity of inserting a new node at the beginning of a singly linked list when the head pointer is available?",
        "o": [
          "O(n)",
          "O(log n)",
          "O(n\u00b2)",
          "O(1)"
        ],
        "a": 3
      },
      {
        "id": "u1_m10",
        "q": "In a circularly linked list, what does the next pointer of the last node point to?",
        "o": [
          "The first node of the list",
          "NULL",
          "The middle node of the list",
          "The previous node of the list"
        ],
        "a": 0
      },
      {
        "id": "u1_m11",
        "q": "What is a multilist?",
        "o": [
          "A list that stores only one data type",
          "A list that is sorted in multiple passes",
          "A linked structure whose nodes belong to more than one list through multiple pointer fields",
          "A list stored in several arrays of equal size"
        ],
        "a": 2
      },
      {
        "id": "u1_m12",
        "q": "In LSD (least significant digit) radix sort on decimal numbers, in which order are the digits processed?",
        "o": [
          "Most significant digit to least significant digit",
          "Least significant digit to most significant digit",
          "Middle digit first, then outward",
          "In a random order of digits"
        ],
        "a": 1
      },
      {
        "id": "u1_m13",
        "q": "In a linked list implementation of the Polynomial ADT, what does each node typically store?",
        "o": [
          "Only the coefficient",
          "Only the exponent and the degree",
          "The variable name and a prev pointer",
          "The coefficient, the exponent and a pointer to the next term"
        ],
        "a": 3
      },
      {
        "id": "u1_m14",
        "q": "Which of the following is a common application of linked lists?",
        "o": [
          "Direct hardware register access",
          "Implementing the C preprocessor",
          "Representing polynomials and sparse matrices",
          "Storing a fixed-size lookup table"
        ],
        "a": 2
      },
      {
        "id": "u1_m15",
        "q": "Radix sort is classified as which type of sorting algorithm?",
        "o": [
          "A non-comparison, distribution-based sort",
          "A comparison-based divide-and-conquer sort",
          "A selection-based sort",
          "A sort based on a binary heap"
        ],
        "a": 0
      },
      {
        "id": "u1_m16",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int a[5] = {10, 20, 30, 40};\n    int n = 4, pos = 1, i;\n    for (i = n; i > pos; i--)\n        a[i] = a[i - 1];\n    a[pos] = 99;\n    n++;\n    for (i = 0; i < n; i++)\n        printf(\"%d \", a[i]);\n    return 0;\n}",
        "o": [
          "99 10 20 30 40",
          "10 20 99 30 40",
          "10 99 30 40 0",
          "10 99 20 30 40"
        ],
        "a": 3
      },
      {
        "id": "u1_m17",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *next;\n};\nint main() {\n    struct Node n1 = {1, NULL}, n2 = {2, NULL}, n3 = {3, NULL};\n    n1.next = &n2;\n    n2.next = &n3;\n    n3.next = &n1;\n    struct Node *p = &n2;\n    int i;\n    for (i = 0; i < 4; i++) {\n        printf(\"%d \", p->data);\n        p = p->next;\n    }\n    return 0;\n}",
        "o": [
          "2 3",
          "2 3 1",
          "2 3 1 2",
          "2 3 1 3"
        ],
        "a": 2
      },
      {
        "id": "u1_m18",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int arr[] = {170, 45, 75, 90};\n    int i;\n    for (i = 0; i < 4; i++)\n        printf(\"%d \", (arr[i] / 10) % 10);\n    return 0;\n}",
        "o": [
          "7 4 7 9",
          "0 5 5 0",
          "1 0 0 0",
          "17 4 7 9"
        ],
        "a": 0
      },
      {
        "id": "u1_m19",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *next;\n};\nint main() {\n    struct Node c = {30, NULL};\n    struct Node b = {20, &c};\n    struct Node a = {10, &b};\n    struct Node *p = &a;\n    p = p->next;\n    printf(\"%d %d\", p->data, p->next->data);\n    return 0;\n}",
        "o": [
          "10 20",
          "20 30",
          "30 NULL",
          "10 30"
        ],
        "a": 1
      },
      {
        "id": "u1_m20",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *prev, *next;\n};\nint main() {\n    struct Node a = {5, NULL, NULL};\n    struct Node b = {15, NULL, NULL};\n    struct Node c = {25, NULL, NULL};\n    a.next = &b; b.prev = &a;\n    b.next = &c; c.prev = &b;\n    struct Node *p = &c;\n    while (p != NULL) {\n        printf(\"%d \", p->data);\n        p = p->prev;\n    }\n    return 0;\n}",
        "o": [
          "5 15 25",
          "25 5",
          "25 15",
          "25 15 5"
        ],
        "a": 3
      }
    ],
    "debug": [
      {
        "id": "u1_d1",
        "title": "Q1. Reverse a Singly Linked List",
        "ps": "Kiran develops a travel app that stores the station codes of a route in a singly linked list, in the order the train visits them. For the return journey, the same stations must be visited in the opposite order, so the list has to be reversed by changing the next pointers of its nodes, without creating any new nodes.\n\nThe function reverseList() in the editable area is meant to reverse the list and return the new head, but the code contains errors. Debug the code so that the program prints the expected output.",
        "sampleIn": "4\n1 3 5 7",
        "sampleOut": "Reversed List: 7 5 3 1",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *next;\n};",
        "buggy": "struct Node *reverseList(struct Node *head) {\n    struct Node *prev = NULL;\n    struct Node *curr = head;\n    while (curr != NULL) {\n        curr->next = prev;\n        prev = curr;\n        curr = curr->next;\n    }\n    return prev;\n}",
        "footer": "struct Node *append(struct Node *head, int x) {\n    struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n    node->data = x;\n    node->next = NULL;\n    if (head == NULL) return node;\n    struct Node *curr = head;\n    while (curr->next != NULL) curr = curr->next;\n    curr->next = node;\n    return head;\n}\nvoid printList(struct Node *head) {\n    printf(\"Reversed List:\");\n    for (struct Node *curr = head; curr != NULL; curr = curr->next) {\n        printf(\" %d\", curr->data);\n    }\n    printf(\"\\n\");\n}\nint main() {\n    int n;\n    struct Node *head = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        head = append(head, x);\n    }\n    head = reverseList(head);\n    printList(head);\n    return 0;\n}",
        "hidden": [
          {
            "input": "4\n1 3 5 7\n",
            "expected": "Reversed List: 7 5 3 1"
          },
          {
            "input": "2\n8 9\n",
            "expected": "Reversed List: 9 8"
          },
          {
            "input": "1\n99\n",
            "expected": "Reversed List: 99"
          },
          {
            "input": "5\n4 4 4 9 9\n",
            "expected": "Reversed List: 9 9 4 4 4"
          },
          {
            "input": "9\n21 34 55 89 144 233 377 610 987\n",
            "expected": "Reversed List: 987 610 377 233 144 89 55 34 21"
          },
          {
            "input": "8\n-10 20 -30 40 -50 60 -70 80\n",
            "expected": "Reversed List: 80 -70 60 -50 40 -30 20 -10"
          }
        ],
        "sol": "struct Node *reverseList(struct Node *head) {\n    struct Node *prev = NULL;\n    struct Node *curr = head;\n    while (curr != NULL) {\n        struct Node *next = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}",
        "samples": [
          {
            "input": "4\n1 3 5 7",
            "expected": "Reversed List: 7 5 3 1"
          },
          {
            "input": "2\n8 9",
            "expected": "Reversed List: 9 8"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n99\n",
            "expected": "Reversed List: 99"
          },
          {
            "input": "5\n4 4 4 9 9\n",
            "expected": "Reversed List: 9 9 4 4 4"
          },
          {
            "input": "9\n21 34 55 89 144 233 377 610 987\n",
            "expected": "Reversed List: 987 610 377 233 144 89 55 34 21"
          },
          {
            "input": "8\n-10 20 -30 40 -50 60 -70 80\n",
            "expected": "Reversed List: 80 -70 60 -50 40 -30 20 -10"
          }
        ]
      },
      {
        "id": "u1_d2",
        "title": "Q2. Delete an Element at a Given Position in an Array-Based List",
        "ps": "Rohit manages the waiting list of a clinic, where the token numbers of waiting patients are stored in an array-based list. When a patient at a given position (counted from 1) leaves the queue, that token has to be removed from the list and every token after it must move one place to the left to close the gap.\n\nThe function deleteAt() in the editable area is meant to remove the element at the given position and return the new size of the list, but the code contains errors. Debug the code so that the program prints the expected output.",
        "sampleIn": "5\n7 8 9 10 11\n2",
        "sampleOut": "Updated List: 7 9 10 11",
        "header": "#include <stdio.h>\nvoid printList(int a[], int n) {\n    printf(\"Updated List:\");\n    if (n == 0) printf(\" Empty\");\n    for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n    printf(\"\\n\");\n}",
        "buggy": "int deleteAt(int a[], int n, int pos) {\n    for (int i = pos; i < n; i++) {\n        a[i] = a[i - 1];\n    }\n    return n;\n}",
        "footer": "int main() {\n    int n, pos;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n    scanf(\"%d\", &pos);\n    n = deleteAt(a, n, pos);\n    printList(a, n);\n    return 0;\n}",
        "hidden": [
          {
            "input": "5\n7 8 9 10 11\n2\n",
            "expected": "Updated List: 7 9 10 11"
          },
          {
            "input": "3\n4 9 12\n3\n",
            "expected": "Updated List: 4 9"
          },
          {
            "input": "4\n5 6 7 8\n4\n",
            "expected": "Updated List: 5 6 7"
          },
          {
            "input": "1\n9\n1\n",
            "expected": "Updated List: Empty"
          },
          {
            "input": "7\n11 22 33 44 55 66 77\n5\n",
            "expected": "Updated List: 11 22 33 44 66 77"
          },
          {
            "input": "6\n-5 -3 0 2 4 6\n2\n",
            "expected": "Updated List: -5 0 2 4 6"
          }
        ],
        "sol": "int deleteAt(int a[], int n, int pos) {\n    for (int i = pos; i < n; i++) {\n        a[i - 1] = a[i];\n    }\n    return n - 1;\n}",
        "samples": [
          {
            "input": "5\n7 8 9 10 11\n2",
            "expected": "Updated List: 7 9 10 11"
          },
          {
            "input": "3\n4 9 12\n3",
            "expected": "Updated List: 4 9"
          }
        ],
        "hidden_cases": [
          {
            "input": "4\n5 6 7 8\n4\n",
            "expected": "Updated List: 5 6 7"
          },
          {
            "input": "1\n9\n1\n",
            "expected": "Updated List: Empty"
          },
          {
            "input": "7\n11 22 33 44 55 66 77\n5\n",
            "expected": "Updated List: 11 22 33 44 66 77"
          },
          {
            "input": "6\n-5 -3 0 2 4 6\n2\n",
            "expected": "Updated List: -5 0 2 4 6"
          }
        ]
      },
      {
        "id": "u1_d3",
        "title": "Q3. Traverse a Circular Linked List and Count Nodes",
        "ps": "Neha plans the night duty of a campus, where the IDs of the security guards are kept in a circular linked list. The function traverse() in the editable area is meant to visit every node exactly once, starting from the head, print all the guard IDs, and then print the number of nodes. Debug the code so that the program prints the expected output.",
        "sampleIn": "2\n100 200",
        "sampleOut": "Circular List: 100 200\nNode Count: 2",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *next;\n};\nstruct Node *createCircular(int arr[], int n) {\n    struct Node *head = NULL, *tail = NULL;\n    for (int i = 0; i < n; i++) {\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = arr[i];\n        node->next = NULL;\n        if (head == NULL) head = node;\n        else tail->next = node;\n        tail = node;\n    }\n    tail->next = head;\n    return head;\n}",
        "buggy": "void traverse(struct Node *head) {\n    struct Node *curr = head;\n    int count = 0;\n    printf(\"Circular List:\");\n    while (curr != NULL) {\n        printf(\" %d\", curr->data);\n        count++;\n        curr = curr->next;\n    }\n    printf(\"\\n\");\n    printf(\"Node Count: %d\\n\", count);\n}",
        "footer": "int main() {\n    int n;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    struct Node *head = createCircular(a, n);\n    traverse(head);\n    return 0;\n}",
        "hidden": [
          {
            "input": "2\n100 200\n",
            "expected": "Circular List: 100 200\nNode Count: 2"
          },
          {
            "input": "4\n9 8 7 6\n",
            "expected": "Circular List: 9 8 7 6\nNode Count: 4"
          },
          {
            "input": "1\n7\n",
            "expected": "Circular List: 7\nNode Count: 1"
          },
          {
            "input": "4\n2 4 4 2\n",
            "expected": "Circular List: 2 4 4 2\nNode Count: 4"
          },
          {
            "input": "8\n1 2 3 4 5 6 7 8\n",
            "expected": "Circular List: 1 2 3 4 5 6 7 8\nNode Count: 8"
          },
          {
            "input": "6\n-3 -2 -1 1 2 3\n",
            "expected": "Circular List: -3 -2 -1 1 2 3\nNode Count: 6"
          }
        ],
        "sol": "void traverse(struct Node *head) {\n    struct Node *curr = head;\n    int count = 0;\n    printf(\"Circular List:\");\n    do {\n        printf(\" %d\", curr->data);\n        count++;\n        curr = curr->next;\n    } while (curr != head);\n    printf(\"\\n\");\n    printf(\"Node Count: %d\\n\", count);\n}",
        "samples": [
          {
            "input": "2\n100 200",
            "expected": "Circular List: 100 200\nNode Count: 2"
          },
          {
            "input": "4\n9 8 7 6",
            "expected": "Circular List: 9 8 7 6\nNode Count: 4"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n7\n",
            "expected": "Circular List: 7\nNode Count: 1"
          },
          {
            "input": "4\n2 4 4 2\n",
            "expected": "Circular List: 2 4 4 2\nNode Count: 4"
          },
          {
            "input": "8\n1 2 3 4 5 6 7 8\n",
            "expected": "Circular List: 1 2 3 4 5 6 7 8\nNode Count: 8"
          },
          {
            "input": "6\n-3 -2 -1 1 2 3\n",
            "expected": "Circular List: -3 -2 -1 1 2 3\nNode Count: 6"
          }
        ]
      },
      {
        "id": "u1_d4",
        "title": "Q4. Delete the Last Node from a Doubly Linked List",
        "ps": "Arjun is building a browser whose history is stored in a doubly linked list. The function deleteLast() in the editable area is meant to remove the last node and return the head of the list, but the code contains errors. Debug the code so that the program prints the expected output.",
        "sampleIn": "3\n11 22 33",
        "sampleOut": "Updated List: 11 22",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *prev;\n    struct Node *next;\n};\nstruct Node *append(struct Node *head, int x) {\n    struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n    node->data = x; node->next = NULL; node->prev = NULL;\n    if (head == NULL) return node;\n    struct Node *curr = head;\n    while (curr->next != NULL) curr = curr->next;\n    curr->next = node; node->prev = curr;\n    return head;\n}\nvoid printList(struct Node *head) {\n    printf(\"Updated List:\");\n    if (head == NULL) printf(\" Empty\");\n    for (struct Node *curr = head; curr != NULL; curr = curr->next) printf(\" %d\", curr->data);\n    printf(\"\\n\");\n}",
        "buggy": "struct Node *deleteLast(struct Node *head) {\n    struct Node *tail = head;\n    while (tail->next != NULL) {\n        tail = tail->next;\n    }\n    tail->prev = NULL;\n    free(tail);\n    return head;\n}",
        "footer": "int main() {\n    int n;\n    struct Node *head = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        head = append(head, x);\n    }\n    head = deleteLast(head);\n    printList(head);\n    return 0;\n}",
        "hidden": [
          {
            "input": "3\n11 22 33\n",
            "expected": "Updated List: 11 22"
          },
          {
            "input": "4\n9 8 7 6\n",
            "expected": "Updated List: 9 8 7"
          },
          {
            "input": "1\n8\n",
            "expected": "Updated List: Empty"
          },
          {
            "input": "4\n1 1 2 2\n",
            "expected": "Updated List: 1 1 2"
          },
          {
            "input": "7\n5 15 25 35 45 55 65\n",
            "expected": "Updated List: 5 15 25 35 45 55"
          },
          {
            "input": "6\n-1 -2 -3 4 5 6\n",
            "expected": "Updated List: -1 -2 -3 4 5"
          }
        ],
        "sol": "struct Node *deleteLast(struct Node *head) {\n    if (head == NULL) return NULL;\n    struct Node *tail = head;\n    while (tail->next != NULL) {\n        tail = tail->next;\n    }\n    if (tail->prev == NULL) {\n        free(tail);\n        return NULL;\n    }\n    tail->prev->next = NULL;\n    free(tail);\n    return head;\n}",
        "samples": [
          {
            "input": "3\n11 22 33",
            "expected": "Updated List: 11 22"
          },
          {
            "input": "4\n9 8 7 6",
            "expected": "Updated List: 9 8 7"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n8\n",
            "expected": "Updated List: Empty"
          },
          {
            "input": "4\n1 1 2 2\n",
            "expected": "Updated List: 1 1 2"
          },
          {
            "input": "7\n5 15 25 35 45 55 65\n",
            "expected": "Updated List: 5 15 25 35 45 55"
          },
          {
            "input": "6\n-1 -2 -3 4 5 6\n",
            "expected": "Updated List: -1 -2 -3 4 5"
          }
        ]
      },
      {
        "id": "u1_d5",
        "title": "Q5. Sort an Array Using LSD Radix Sort",
        "ps": "Divya works at a courier hub where parcel numbers must be sorted using LSD radix sort. The functions countSort() and radixSort() in the editable area are meant to sort the array in ascending order, but the code contains errors. Debug the code so that the program prints the expected output.",
        "sampleIn": "5\n21 12 31 13 22",
        "sampleOut": "Sorted Array: 12 13 21 22 31",
        "header": "#include <stdio.h>\nint getMax(int a[], int n) {\n    int max = a[0];\n    for (int i = 1; i < n; i++) if (a[i] > max) max = a[i];\n    return max;\n}\nvoid printArray(int a[], int n) {\n    printf(\"Sorted Array:\");\n    for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n    printf(\"\\n\");\n}",
        "buggy": "void countSort(int a[], int n, int exp) {\n    int output[105];\n    int count[10] = {0};\n    for (int i = 0; i < n; i++) count[(a[i] / exp) % 10]++;\n    for (int i = 1; i < 10; i++) count[i] += count[i - 1];\n    for (int i = 0; i < n; i++) {\n        output[count[(a[i] / exp) % 10] - 1] = a[i];\n        count[(a[i] / exp) % 10]--;\n    }\n    for (int i = 0; i < n; i++) a[i] = output[i];\n}\nvoid radixSort(int a[], int n) {\n    int max = getMax(a, n);\n    for (int exp = 1; max / exp > 0; exp += 10) countSort(a, n, exp);\n}",
        "footer": "int main() {\n    int n;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    radixSort(a, n);\n    printArray(a, n);\n    return 0;\n}",
        "hidden": [
          {
            "input": "5\n21 12 31 13 22\n",
            "expected": "Sorted Array: 12 13 21 22 31"
          },
          {
            "input": "4\n99 9 90 19\n",
            "expected": "Sorted Array: 9 19 90 99"
          },
          {
            "input": "1\n5\n",
            "expected": "Sorted Array: 5"
          },
          {
            "input": "6\n100 10 1 1000 11 101\n",
            "expected": "Sorted Array: 1 10 11 100 101 1000"
          },
          {
            "input": "10\n329 457 657 839 436 720 355 123 987 654\n",
            "expected": "Sorted Array: 123 329 355 436 457 654 657 720 839 987"
          },
          {
            "input": "7\n5000 450 45 4 4000 40 400\n",
            "expected": "Sorted Array: 4 40 45 400 450 4000 5000"
          }
        ],
        "sol": "void countSort(int a[], int n, int exp) {\n    int output[105];\n    int count[10] = {0};\n    for (int i = 0; i < n; i++) {\n        count[(a[i] / exp) % 10]++;\n    }\n    for (int i = 1; i < 10; i++) {\n        count[i] += count[i - 1];\n    }\n    for (int i = n - 1; i >= 0; i--) {\n        output[count[(a[i] / exp) % 10] - 1] = a[i];\n        count[(a[i] / exp) % 10]--;\n    }\n    for (int i = 0; i < n; i++) {\n        a[i] = output[i];\n    }\n}\nvoid radixSort(int a[], int n) {\n    int max = getMax(a, n);\n    for (int exp = 1; max / exp > 0; exp *= 10) {\n        countSort(a, n, exp);\n    }\n}",
        "samples": [
          {
            "input": "5\n21 12 31 13 22",
            "expected": "Sorted Array: 12 13 21 22 31"
          },
          {
            "input": "4\n99 9 90 19",
            "expected": "Sorted Array: 9 19 90 99"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n5\n",
            "expected": "Sorted Array: 5"
          },
          {
            "input": "6\n100 10 1 1000 11 101\n",
            "expected": "Sorted Array: 1 10 11 100 101 1000"
          },
          {
            "input": "10\n329 457 657 839 436 720 355 123 987 654\n",
            "expected": "Sorted Array: 123 329 355 436 457 654 657 720 839 987"
          },
          {
            "input": "7\n5000 450 45 4 4000 40 400\n",
            "expected": "Sorted Array: 4 40 45 400 450 4000 5000"
          }
        ]
      }
    ],
    "cod": [
      {
        "id": "u1_c1",
        "title": "Q1. Array-Based List Insertion",
        "ps": "Rohan builds a to-do application where the priority number of every task is stored in an array-based list. When a new urgent task arrives, it has to be placed at a specific position in the list, and every task from that position onwards must move one place to the right to make room for it.\n\nWrite a program that reads the current list, a position (counted from 1), and a new priority value, then inserts the value at that position by shifting the later elements to the right, and prints the updated list.",
        "sampleIn": "4\n7 8 9 10\n2 100",
        "sampleOut": "Updated List: 7 100 8 9 10",
        "hidden": [
          {
            "input": "4\n7 8 9 10\n2 100\n",
            "expected": "Updated List: 7 100 8 9 10"
          },
          {
            "input": "2\n4 9\n2 6\n",
            "expected": "Updated List: 4 6 9"
          },
          {
            "input": "5\n10 20 30 40 50\n3 25\n",
            "expected": "Updated List: 10 20 25 30 40 50"
          },
          {
            "input": "3\n1 2 3\n1 0\n",
            "expected": "Updated List: 0 1 2 3"
          },
          {
            "input": "4\n5 6 7 8\n5 9\n",
            "expected": "Updated List: 5 6 7 8 9"
          },
          {
            "input": "1\n100\n2 200\n",
            "expected": "Updated List: 100 200"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n, pos, value;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n    scanf(\"%d %d\", &pos, &value);\n    for (int i = n; i >= pos; i--) {\n        a[i] = a[i - 1];\n    }\n    a[pos - 1] = value;\n    n++;\n    printf(\"Updated List:\");\n    for (int i = 0; i < n; i++) {\n        printf(\" %d\", a[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4\n7 8 9 10\n2 100",
            "expected": "Updated List: 7 100 8 9 10"
          },
          {
            "input": "2\n4 9\n2 6",
            "expected": "Updated List: 4 6 9"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n10 20 30 40 50\n3 25\n",
            "expected": "Updated List: 10 20 25 30 40 50"
          },
          {
            "input": "3\n1 2 3\n1 0\n",
            "expected": "Updated List: 0 1 2 3"
          },
          {
            "input": "4\n5 6 7 8\n5 9\n",
            "expected": "Updated List: 5 6 7 8 9"
          },
          {
            "input": "1\n100\n2 200\n",
            "expected": "Updated List: 100 200"
          }
        ]
      },
      {
        "id": "u1_c2",
        "title": "Q2. Delete a Node from a Singly Linked List",
        "ps": "Kavya works on a railway booking system that keeps the booked seat numbers of a coach in a singly linked list. When a passenger cancels, the first node holding that passenger's seat number has to be removed while the order of other nodes stays the same. If the key is not present, report 'Key Not Found'.",
        "sampleIn": "3\n15 25 35\n25",
        "sampleOut": "Updated List: 15 35",
        "hidden": [
          {
            "input": "3\n15 25 35\n25\n",
            "expected": "Updated List: 15 35"
          },
          {
            "input": "4\n2 4 6 8\n5\n",
            "expected": "Key Not Found"
          },
          {
            "input": "5\n4 7 4 9 4\n4\n",
            "expected": "Updated List: 7 4 9 4"
          },
          {
            "input": "4\n1 2 3 4\n1\n",
            "expected": "Updated List: 2 3 4"
          },
          {
            "input": "4\n5 6 7 8\n8\n",
            "expected": "Updated List: 5 6 7"
          },
          {
            "input": "1\n9\n9\n",
            "expected": "Updated List: Empty"
          }
        ],
        "sol": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *next;\n};\nint main() {\n    int n, key;\n    struct Node *head = NULL, *tail = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x;\n        node->next = NULL;\n        if (head == NULL) {\n            head = node;\n            tail = node;\n        } else {\n            tail->next = node;\n            tail = node;\n        }\n    }\n    scanf(\"%d\", &key);\n    struct Node *curr = head, *prev = NULL;\n    while (curr != NULL && curr->data != key) {\n        prev = curr;\n        curr = curr->next;\n    }\n    if (curr == NULL) {\n        printf(\"Key Not Found\\n\");\n        return 0;\n    }\n    if (prev == NULL) {\n        head = curr->next;\n    } else {\n        prev->next = curr->next;\n    }\n    free(curr);\n    if (head == NULL) {\n        printf(\"Updated List: Empty\\n\");\n        return 0;\n    }\n    printf(\"Updated List:\");\n    for (curr = head; curr != NULL; curr = curr->next) {\n        printf(\" %d\", curr->data);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "3\n15 25 35\n25",
            "expected": "Updated List: 15 35"
          },
          {
            "input": "4\n2 4 6 8\n5",
            "expected": "Key Not Found"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n4 7 4 9 4\n4\n",
            "expected": "Updated List: 7 4 9 4"
          },
          {
            "input": "4\n1 2 3 4\n1\n",
            "expected": "Updated List: 2 3 4"
          },
          {
            "input": "4\n5 6 7 8\n8\n",
            "expected": "Updated List: 5 6 7"
          },
          {
            "input": "1\n9\n9\n",
            "expected": "Updated List: Empty"
          }
        ]
      },
      {
        "id": "u1_c3",
        "title": "Q3. Print a Doubly Linked List in Reverse Order",
        "ps": "Aarav is developing a music player that stores the song IDs of a playlist in a doubly linked list. Build the doubly linked list from the given song IDs by adding each new node at the end, and then print the song IDs in reverse order starting at the last node and following previous pointers.",
        "sampleIn": "3\n8 16 24",
        "sampleOut": "Reverse Order: 24 16 8",
        "hidden": [
          {
            "input": "3\n8 16 24\n",
            "expected": "Reverse Order: 24 16 8"
          },
          {
            "input": "2\n100 200\n",
            "expected": "Reverse Order: 200 100"
          },
          {
            "input": "5\n1 2 3 4 5\n",
            "expected": "Reverse Order: 5 4 3 2 1"
          },
          {
            "input": "1\n42\n",
            "expected": "Reverse Order: 42"
          },
          {
            "input": "4\n10 20 30 40\n",
            "expected": "Reverse Order: 40 30 20 10"
          },
          {
            "input": "6\n7 7 8 8 9 9\n",
            "expected": "Reverse Order: 9 9 8 8 7 7"
          }
        ],
        "sol": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *prev;\n    struct Node *next;\n};\nint main() {\n    int n;\n    struct Node *head = NULL, *tail = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x;\n        node->next = NULL;\n        node->prev = tail;\n        if (head == NULL) {\n            head = node;\n        } else {\n            tail->next = node;\n        }\n        tail = node;\n    }\n    printf(\"Reverse Order:\");\n    for (struct Node *curr = tail; curr != NULL; curr = curr->prev) {\n        printf(\" %d\", curr->data);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "3\n8 16 24",
            "expected": "Reverse Order: 24 16 8"
          },
          {
            "input": "2\n100 200",
            "expected": "Reverse Order: 200 100"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n1 2 3 4 5\n",
            "expected": "Reverse Order: 5 4 3 2 1"
          },
          {
            "input": "1\n42\n",
            "expected": "Reverse Order: 42"
          },
          {
            "input": "4\n10 20 30 40\n",
            "expected": "Reverse Order: 40 30 20 10"
          },
          {
            "input": "6\n7 7 8 8 9 9\n",
            "expected": "Reverse Order: 9 9 8 8 7 7"
          }
        ]
      },
      {
        "id": "u1_c4",
        "title": "Q4. Addition of Two Polynomials Using Arrays",
        "ps": "Priya is preparing a physics lab report in which two motion equations are written as polynomials. Each polynomial is stored using an array-based Polynomial ADT, where the index is the exponent and the value is the coefficient. Read two polynomials and add them.",
        "sampleIn": "1\n1 1\n1\n2 2",
        "sampleOut": "Sum Polynomial: 3 3",
        "hidden": [
          {
            "input": "1\n1 1\n1\n2 2\n",
            "expected": "Sum Polynomial: 3 3"
          },
          {
            "input": "2\n5 0 3\n3\n1 2 3 4\n",
            "expected": "Sum Polynomial: 6 2 6 4"
          },
          {
            "input": "2\n1 2 3\n2\n4 5 6\n",
            "expected": "Sum Polynomial: 5 7 9"
          },
          {
            "input": "3\n1 0 2 5\n1\n3 4\n",
            "expected": "Sum Polynomial: 4 4 2 5"
          },
          {
            "input": "0\n7\n0\n3\n",
            "expected": "Sum Polynomial: 10"
          },
          {
            "input": "1\n2 3\n4\n1 1 1 1 1\n",
            "expected": "Sum Polynomial: 3 4 1 1 1"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int d1, d2;\n    int p[105], q[105], r[105];\n    scanf(\"%d\", &d1);\n    for (int i = 0; i <= d1; i++) {\n        scanf(\"%d\", &p[i]);\n    }\n    scanf(\"%d\", &d2);\n    for (int i = 0; i <= d2; i++) {\n        scanf(\"%d\", &q[i]);\n    }\n    int maxDeg = d1 > d2 ? d1 : d2;\n    for (int i = 0; i <= maxDeg; i++) {\n        int a = i <= d1 ? p[i] : 0;\n        int b = i <= d2 ? q[i] : 0;\n        r[i] = a + b;\n    }\n    printf(\"Sum Polynomial:\");\n    for (int i = 0; i <= maxDeg; i++) {\n        printf(\" %d\", r[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "1\n1 1\n1\n2 2",
            "expected": "Sum Polynomial: 3 3"
          },
          {
            "input": "2\n5 0 3\n3\n1 2 3 4",
            "expected": "Sum Polynomial: 6 2 6 4"
          }
        ],
        "hidden_cases": [
          {
            "input": "2\n1 2 3\n2\n4 5 6\n",
            "expected": "Sum Polynomial: 5 7 9"
          },
          {
            "input": "3\n1 0 2 5\n1\n3 4\n",
            "expected": "Sum Polynomial: 4 4 2 5"
          },
          {
            "input": "0\n7\n0\n3\n",
            "expected": "Sum Polynomial: 10"
          },
          {
            "input": "1\n2 3\n4\n1 1 1 1 1\n",
            "expected": "Sum Polynomial: 3 4 1 1 1"
          }
        ]
      }
    ]
  },
  "u2": {
    "name": "Unit 2: Stacks & Queues",
    "mcq": [
      {
        "id": "u2_m1",
        "q": "In an array-based stack of size MAX where top starts at -1, which condition indicates that the stack is full?",
        "o": [
          "top == -1",
          "top == 0",
          "top == MAX - 1",
          "top == MAX"
        ],
        "a": 2
      },
      {
        "id": "u2_m2",
        "q": "Which of the following is an application of a stack?",
        "o": [
          "Undo feature in text editors",
          "Printer job spooling",
          "Round-robin CPU scheduling",
          "Ticket counter simulation"
        ],
        "a": 0
      },
      {
        "id": "u2_m3",
        "q": "What is stack underflow?",
        "o": [
          "Pushing an element onto a full stack",
          "Popping an element from an empty stack",
          "Pushing the same value twice",
          "Reading the top of a full stack"
        ],
        "a": 1
      },
      {
        "id": "u2_m4",
        "q": "Which stack operation removes the top element of the stack?",
        "o": [
          "push",
          "peek",
          "isEmpty",
          "pop"
        ],
        "a": 3
      },
      {
        "id": "u2_m5",
        "q": "Which principle does a stack follow for inserting and removing elements?",
        "o": [
          "FIFO",
          "LIFO",
          "Random access",
          "Priority order"
        ],
        "a": 1
      },
      {
        "id": "u2_m6",
        "q": "Which of the following is an application of a queue?",
        "o": [
          "Reversing a string",
          "Checking balanced parentheses",
          "Evaluating postfix expressions",
          "CPU scheduling and printer spooling"
        ],
        "a": 3
      },
      {
        "id": "u2_m7",
        "q": "During infix to postfix conversion, which symbols are held on the stack?",
        "o": [
          "Only operands",
          "Only the final postfix string",
          "Only right parentheses",
          "Operators and left parentheses"
        ],
        "a": 3
      },
      {
        "id": "u2_m8",
        "q": "In a queue, at which ends do insertion and deletion take place?",
        "o": [
          "Insert at front, delete at rear",
          "Insert and delete at the front",
          "Insert at rear, delete at front",
          "Insert and delete at the rear"
        ],
        "a": 2
      },
      {
        "id": "u2_m9",
        "q": "Which data structure is used to keep track of active function calls and their return addresses?",
        "o": [
          "A stack",
          "A queue",
          "A binary tree",
          "A hash table"
        ],
        "a": 0
      },
      {
        "id": "u2_m10",
        "q": "Which data structure is used to check whether symbols such as (), {} and [] in an expression are balanced?",
        "o": [
          "Queue",
          "Binary tree",
          "Stack",
          "Hash table"
        ],
        "a": 2
      },
      {
        "id": "u2_m11",
        "q": "Which queue operation adds an element at the rear of the queue?",
        "o": [
          "push",
          "enqueue",
          "pop",
          "dequeue"
        ],
        "a": 1
      },
      {
        "id": "u2_m12",
        "q": "What does a double-ended queue (deque) allow?",
        "o": [
          "Insertion and deletion at both front and rear",
          "Insertion at front only and deletion at rear only",
          "Insertion at rear only and deletion at front only",
          "Insertion and deletion only in the middle"
        ],
        "a": 0
      },
      {
        "id": "u2_m13",
        "q": "While evaluating a postfix expression using a stack, what is done when an operand is encountered?",
        "o": [
          "It is printed immediately",
          "It is discarded",
          "It is applied to the two operators below it",
          "It is pushed onto the stack"
        ],
        "a": 3
      },
      {
        "id": "u2_m14",
        "q": "Which statement correctly moves rear to its next position in a circular queue of size MAX?",
        "o": [
          "rear = rear + 1",
          "rear = rear - 1",
          "rear = (rear + 1) % MAX",
          "rear = rear * MAX"
        ],
        "a": 2
      },
      {
        "id": "u2_m15",
        "q": "What is the postfix form of the infix expression A + B * C?",
        "o": [
          "AB+C*",
          "ABC*+",
          "ABC+*",
          "+A*BC"
        ],
        "a": 1
      },
      {
        "id": "u2_m16",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nvoid show(int n) {\n    if (n == 0)\n        return;\n    printf(\"%d \", n);\n    show(n - 1);\n    printf(\"%d \", n);\n}\nint main() {\n    show(3);\n    return 0;\n}",
        "o": [
          "3 2 1 1 2 3",
          "3 2 1",
          "1 2 3 3 2 1",
          "3 3 2 2 1 1"
        ],
        "a": 0
      },
      {
        "id": "u2_m17",
        "q": "What is the output of the following C code, which evaluates the postfix expression 8 3 -?",
        "code": "#include <stdio.h>\nint main() {\n    int s[10], top = -1, a, b;\n    s[++top] = 8;\n    s[++top] = 3;\n    b = s[top--];\n    a = s[top--];\n    s[++top] = a - b;\n    printf(\"%d\", s[top]);\n    return 0;\n}",
        "o": [
          "5",
          "-5",
          "11",
          "24"
        ],
        "a": 0
      },
      {
        "id": "u2_m18",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int stack[5], top = -1;\n    stack[++top] = 10;\n    stack[++top] = 20;\n    stack[++top] = 30;\n    top--;\n    printf(\"%d %d\", stack[top], top);\n    return 0;\n}",
        "o": [
          "30 2",
          "20 1",
          "20 2",
          "30 1"
        ],
        "a": 1
      },
      {
        "id": "u2_m19",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int q[5], front = 0, rear = -1;\n    q[++rear] = 5;\n    q[++rear] = 10;\n    q[++rear] = 15;\n    front++;\n    printf(\"%d %d\", q[front], rear - front + 1);\n    return 0;\n}",
        "o": [
          "5 3",
          "10 3",
          "10 2",
          "15 2"
        ],
        "a": 2
      },
      {
        "id": "u2_m20",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int max = 5, rear = 3, i;\n    for (i = 0; i < 3; i++) {\n        rear = (rear + 1) % max;\n        printf(\"%d \", rear);\n    }\n    return 0;\n}",
        "o": [
          "4 5 6",
          "3 4 0",
          "0 1 2",
          "4 0 1"
        ],
        "a": 3
      }
    ],
    "debug": [
      {
        "id": "u2_d1",
        "title": "Q1. STACK IMPLEMENTATION USING ARRAY",
        "ps": "Meena runs the plate counter of a canteen, where clean plates are stacked in a holder of fixed capacity. Implement push(), pop() and peek() using an array. Debug the code so that the program prints the expected output.",
        "sampleIn": "2\n2\n1 7\n3 0",
        "sampleOut": "Top: 7",
        "header": "#include <stdio.h>\nint stack[105];\nint top = -1;\nint capacity;",
        "buggy": "void push(int x) {\n    if (top == capacity) {\n        printf(\"Stack Overflow\\n\");\n        return;\n    }\n    stack[top] = x;\n    top++;\n}\nvoid pop() {\n    if (top <= 0) {\n        printf(\"Stack Underflow\\n\");\n        return;\n    }\n    printf(\"Popped: %d\\n\", stack[top]);\n    top--;\n}\nvoid peek() {\n    if (top == 0) {\n        printf(\"Stack is empty\\n\");\n        return;\n    }\n    printf(\"Top: %d\\n\", stack[top]);\n}",
        "footer": "void process(int t, int x) {\n    if (t == 1) push(x);\n    else if (t == 2) pop();\n    else peek();\n}\nint main() {\n    int m;\n    scanf(\"%d\", &capacity);\n    scanf(\"%d\", &m);\n    for (int i = 0; i < m; i++) {\n        int t, x;\n        scanf(\"%d %d\", &t, &x);\n        process(t, x);\n    }\n    return 0;\n}",
        "hidden": [
          {
            "input": "2\n2\n1 7\n3 0\n",
            "expected": "Top: 7"
          },
          {
            "input": "1\n1\n2 0\n",
            "expected": "Stack Underflow"
          },
          {
            "input": "2\n3\n2 0\n3 0\n1 5\n",
            "expected": "Stack Underflow\nStack is empty"
          },
          {
            "input": "3\n8\n1 4\n1 5\n1 6\n1 7\n2 0\n2 0\n2 0\n2 0\n",
            "expected": "Stack Overflow\nPopped: 6\nPopped: 5\nPopped: 4\nStack Underflow"
          },
          {
            "input": "1\n4\n1 9\n1 8\n3 0\n2 0\n",
            "expected": "Stack Overflow\nTop: 9\nPopped: 9"
          },
          {
            "input": "4\n9\n1 3\n1 6\n1 9\n1 12\n1 15\n3 0\n2 0\n2 0\n3 0\n",
            "expected": "Stack Overflow\nTop: 12\nPopped: 12\nPopped: 9\nTop: 6"
          }
        ],
        "sol": "void push(int x) {\n    if (top == capacity - 1) {\n        printf(\"Stack Overflow\\n\");\n        return;\n    }\n    top++;\n    stack[top] = x;\n}\nvoid pop() {\n    if (top == -1) {\n        printf(\"Stack Underflow\\n\");\n        return;\n    }\n    printf(\"Popped: %d\\n\", stack[top]);\n    top--;\n}\nvoid peek() {\n    if (top == -1) {\n        printf(\"Stack is empty\\n\");\n        return;\n    }\n    printf(\"Top: %d\\n\", stack[top]);\n}",
        "samples": [
          {
            "input": "2\n2\n1 7\n3 0",
            "expected": "Top: 7"
          },
          {
            "input": "1\n1\n2 0",
            "expected": "Stack Underflow"
          }
        ],
        "hidden_cases": [
          {
            "input": "2\n3\n2 0\n3 0\n1 5\n",
            "expected": "Stack Underflow\nStack is empty"
          },
          {
            "input": "3\n8\n1 4\n1 5\n1 6\n1 7\n2 0\n2 0\n2 0\n2 0\n",
            "expected": "Stack Overflow\nPopped: 6\nPopped: 5\nPopped: 4\nStack Underflow"
          },
          {
            "input": "1\n4\n1 9\n1 8\n3 0\n2 0\n",
            "expected": "Stack Overflow\nTop: 9\nPopped: 9"
          },
          {
            "input": "4\n9\n1 3\n1 6\n1 9\n1 12\n1 15\n3 0\n2 0\n2 0\n3 0\n",
            "expected": "Stack Overflow\nTop: 12\nPopped: 12\nPopped: 9\nTop: 6"
          }
        ]
      },
      {
        "id": "u2_d2",
        "title": "Q2. INFIX TO POSTFIX CONVERSION",
        "ps": "Lakshmi is writing the expression module of a calculator app. Users type expressions in infix form, but the calculator evaluates them in postfix form. Debug infixToPostfix() so that the program prints the expected postfix expression.",
        "sampleIn": "x*y+z",
        "sampleOut": "Postfix: xy*z+",
        "header": "#include <stdio.h>\nint precedence(char c) {\n    if (c == '*' || c == '/') return 2;\n    if (c == '+' || c == '-') return 1;\n    return 0;\n}",
        "buggy": "void infixToPostfix(char s[]) {\n    char stack[105];\n    int top = -1;\n    printf(\"Postfix: \");\n    for (int i = 0; s[i] != '\\0'; i++) {\n        char c = s[i];\n        if (c >= 'a' && c <= 'z') {\n            printf(\"%c\", c);\n        } else if (c == '(') {\n            stack[++top] = c;\n        } else if (c == ')') {\n            while (top >= 0 && stack[top] != '(') printf(\"%c\", stack[top--]);\n        } else {\n            stack[++top] = c;\n        }\n    }\n    printf(\"\\n\");\n}",
        "footer": "int main() {\n    char s[55];\n    scanf(\"%s\", s);\n    infixToPostfix(s);\n    return 0;\n}",
        "hidden": [
          {
            "input": "x*y+z\n",
            "expected": "Postfix: xy*z+"
          },
          {
            "input": "p+q-r\n",
            "expected": "Postfix: pq+r-"
          },
          {
            "input": "(a+b)c\n",
            "expected": "Postfix: ab+c"
          },
          {
            "input": "a-b-c\n",
            "expected": "Postfix: ab-c-"
          },
          {
            "input": "a*(b+c)/d\n",
            "expected": "Postfix: abc+*d/"
          },
          {
            "input": "(a+b)(c-d)/e\n",
            "expected": "Postfix: ab+cd-e/"
          }
        ],
        "sol": "void infixToPostfix(char s[]) {\n    char stack[105];\n    int top = -1;\n    printf(\"Postfix: \");\n    for (int i = 0; s[i] != '\\0'; i++) {\n        char c = s[i];\n        if (c >= 'a' && c <= 'z') {\n            printf(\"%c\", c);\n        } else if (c == '(') {\n            top++;\n            stack[top] = c;\n        } else if (c == ')') {\n            while (top >= 0 && stack[top] != '(') {\n                printf(\"%c\", stack[top]);\n                top--;\n            }\n            if (top >= 0 && stack[top] == '(') {\n                top--;\n            }\n        } else {\n            while (top >= 0 && stack[top] != '(' &&\n                   precedence(stack[top]) >= precedence(c)) {\n                printf(\"%c\", stack[top]);\n                top--;\n            }\n            top++;\n            stack[top] = c;\n        }\n    }\n    while (top >= 0) {\n        if (stack[top] != '(') {\n            printf(\"%c\", stack[top]);\n        }\n        top--;\n    }\n    printf(\"\\n\");\n}",
        "samples": [
          {
            "input": "x*y+z",
            "expected": "Postfix: xy*z+"
          },
          {
            "input": "p+q-r",
            "expected": "Postfix: pq+r-"
          }
        ],
        "hidden_cases": [
          {
            "input": "(a+b)c\n",
            "expected": "Postfix: ab+c"
          },
          {
            "input": "a-b-c\n",
            "expected": "Postfix: ab-c-"
          },
          {
            "input": "a*(b+c)/d\n",
            "expected": "Postfix: abc+*d/"
          },
          {
            "input": "(a+b)(c-d)/e\n",
            "expected": "Postfix: ab+cd-e/"
          }
        ]
      },
      {
        "id": "u2_d3",
        "title": "Q3. REVERSE A WORD USING A STACK",
        "ps": "Vikram creates a word game where the game shows a mirror image of the typed word using a stack. The function reverseWord() in the editable area contains errors. Debug the code so that the program prints the expected output.",
        "sampleIn": "queue",
        "sampleOut": "Reversed: eueuq",
        "header": "#include <stdio.h>",
        "buggy": "void reverseWord(char s[]) {\n    char stack[105];\n    int top = -1;\n    for (int i = 0; s[i] != '\\0'; i++) {\n        stack[top] = s[i];\n        top++;\n    }\n    printf(\"Reversed: \");\n    while (top > 0) {\n        printf(\"%c\", stack[top]);\n        top--;\n    }\n    printf(\"\\n\");\n}",
        "footer": "int main() {\n    char s[105];\n    scanf(\"%s\", s);\n    reverseWord(s);\n    return 0;\n}",
        "hidden": [
          {
            "input": "queue\n",
            "expected": "Reversed: eueuq"
          },
          {
            "input": "tree\n",
            "expected": "Reversed: eert"
          },
          {
            "input": "a\n",
            "expected": "Reversed: a"
          },
          {
            "input": "level\n",
            "expected": "Reversed: level"
          },
          {
            "input": "Programming\n",
            "expected": "Reversed: gnimmargorP"
          },
          {
            "input": "DataStructures\n",
            "expected": "Reversed: serutcurtSataD"
          }
        ],
        "sol": "void reverseWord(char s[]) {\n    char stack[105];\n    int top = -1;\n    for (int i = 0; s[i] != '\\0'; i++) {\n        top++;\n        stack[top] = s[i];\n    }\n    printf(\"Reversed: \");\n    while (top >= 0) {\n        printf(\"%c\", stack[top]);\n        top--;\n    }\n    printf(\"\\n\");\n}",
        "samples": [
          {
            "input": "queue",
            "expected": "Reversed: eueuq"
          },
          {
            "input": "tree",
            "expected": "Reversed: eert"
          }
        ],
        "hidden_cases": [
          {
            "input": "a\n",
            "expected": "Reversed: a"
          },
          {
            "input": "level\n",
            "expected": "Reversed: level"
          },
          {
            "input": "Programming\n",
            "expected": "Reversed: gnimmargorP"
          },
          {
            "input": "DataStructures\n",
            "expected": "Reversed: serutcurtSataD"
          }
        ]
      },
      {
        "id": "u2_d4",
        "title": "Q4. LINEAR QUEUE IMPLEMENTATION USING ARRAY",
        "ps": "Sanjay manages the token system of a bank branch using a queue in a simple linear array. The functions enqueue(), dequeue() and showFront() contain errors. Debug the code so that the program prints the expected output.",
        "sampleIn": "2\n3\n1 7\n1 8\n3 0",
        "sampleOut": "Front: 7",
        "header": "#include <stdio.h>\nint queue[105];\nint front = 0;\nint rear = 0;\nint capacity;",
        "buggy": "void enqueue(int x) {\n    if (rear > capacity) {\n        printf(\"Queue Overflow\\n\");\n        return;\n    }\n    queue[rear++] = x;\n}\nvoid dequeue() {\n    if (front > rear) {\n        printf(\"Queue Underflow\\n\");\n        return;\n    }\n    front++;\n    printf(\"Dequeued: %d\\n\", queue[front]);\n}\nvoid showFront() {\n    if (front >= rear) {\n        printf(\"Queue is empty\\n\");\n        return;\n    }\n    printf(\"Front: %d\\n\", queue[front]);\n}",
        "footer": "void process(int t, int x) {\n    if (t == 1) enqueue(x);\n    else if (t == 2) dequeue();\n    else showFront();\n}\nint main() {\n    int m;\n    scanf(\"%d\", &capacity);\n    scanf(\"%d\", &m);\n    for (int i = 0; i < m; i++) {\n        int t, x;\n        scanf(\"%d %d\", &t, &x);\n        process(t, x);\n    }\n    return 0;\n}",
        "hidden": [
          {
            "input": "2\n3\n1 7\n1 8\n3 0\n",
            "expected": "Front: 7"
          },
          {
            "input": "3\n1\n2 0\n",
            "expected": "Queue Underflow"
          },
          {
            "input": "2\n3\n2 0\n3 0\n1 5\n",
            "expected": "Queue Underflow\nQueue is empty"
          },
          {
            "input": "2\n5\n1 1\n1 2\n1 3\n2 0\n1 4\n",
            "expected": "Queue Overflow\nDequeued: 1\nQueue Overflow"
          },
          {
            "input": "1\n5\n1 9\n3 0\n2 0\n1 8\n3 0\n",
            "expected": "Front: 9\nDequeued: 9\nQueue Overflow\nQueue is empty"
          },
          {
            "input": "5\n9\n1 10\n1 20\n1 30\n2 0\n3 0\n1 40\n3 0\n2 0\n3 0\n",
            "expected": "Dequeued: 10\nFront: 20\nFront: 20\nDequeued: 20\nFront: 30"
          }
        ],
        "sol": "void enqueue(int x) {\n    if (rear == capacity) {\n        printf(\"Queue Overflow\\n\");\n        return;\n    }\n    queue[rear] = x;\n    rear++;\n}\nvoid dequeue() {\n    if (front == rear) {\n        printf(\"Queue Underflow\\n\");\n        return;\n    }\n    printf(\"Dequeued: %d\\n\", queue[front]);\n    front++;\n}\nvoid showFront() {\n    if (front == rear) {\n        printf(\"Queue is empty\\n\");\n        return;\n    }\n    printf(\"Front: %d\\n\", queue[front]);\n}",
        "samples": [
          {
            "input": "2\n3\n1 7\n1 8\n3 0",
            "expected": "Front: 7"
          },
          {
            "input": "3\n1\n2 0",
            "expected": "Queue Underflow"
          }
        ],
        "hidden_cases": [
          {
            "input": "2\n3\n2 0\n3 0\n1 5\n",
            "expected": "Queue Underflow\nQueue is empty"
          },
          {
            "input": "2\n5\n1 1\n1 2\n1 3\n2 0\n1 4\n",
            "expected": "Queue Overflow\nDequeued: 1\nQueue Overflow"
          },
          {
            "input": "1\n5\n1 9\n3 0\n2 0\n1 8\n3 0\n",
            "expected": "Front: 9\nDequeued: 9\nQueue Overflow\nQueue is empty"
          },
          {
            "input": "5\n9\n1 10\n1 20\n1 30\n2 0\n3 0\n1 40\n3 0\n2 0\n3 0\n",
            "expected": "Dequeued: 10\nFront: 20\nFront: 20\nDequeued: 20\nFront: 30"
          }
        ]
      },
      {
        "id": "u2_d5",
        "title": "Q5. HOT POTATO GAME USING A QUEUE",
        "ps": "Farah organises the hot potato game where n children stand in line in a queue. Every round, k-1 children pass the potato and rejoin rear; the k-th child leaves. Debug hotPotato() so that the program prints each eliminated child and the winner.",
        "sampleIn": "3 2",
        "sampleOut": "Eliminated: 2\nEliminated: 1\nWinner: 3",
        "header": "#include <stdio.h>",
        "buggy": "void hotPotato(int n, int k) {\n    int queue[505];\n    int front = 0, rear = 0;\n    for (int i = 1; i <= n; i++) queue[rear++] = i;\n    while (rear - front > 0) {\n        for (int j = 0; j < k; j++) queue[rear++] = queue[front++];\n        printf(\"Eliminated: %d\\n\", queue[front++]);\n    }\n    printf(\"Winner: %d\\n\", queue[front]);\n}",
        "footer": "int main() {\n    int n, k;\n    scanf(\"%d %d\", &n, &k);\n    hotPotato(n, k);\n    return 0;\n}",
        "hidden": [
          {
            "input": "3 2\n",
            "expected": "Eliminated: 2\nEliminated: 1\nWinner: 3"
          },
          {
            "input": "5 3\n",
            "expected": "Eliminated: 3\nEliminated: 1\nEliminated: 5\nEliminated: 2\nWinner: 4"
          },
          {
            "input": "1 3\n",
            "expected": "Winner: 1"
          },
          {
            "input": "4 1\n",
            "expected": "Eliminated: 1\nEliminated: 2\nEliminated: 3\nWinner: 4"
          },
          {
            "input": "7 5\n",
            "expected": "Eliminated: 5\nEliminated: 3\nEliminated: 2\nEliminated: 4\nEliminated: 7\nEliminated: 1\nWinner: 6"
          },
          {
            "input": "10 4\n",
            "expected": "Eliminated: 4\nEliminated: 8\nEliminated: 2\nEliminated: 7\nEliminated: 3\nEliminated: 10\nEliminated: 9\nEliminated: 1\nEliminated: 6\nWinner: 5"
          }
        ],
        "sol": "void hotPotato(int n, int k) {\n    int queue[505];\n    int front = 0, rear = 0;\n    for (int i = 1; i <= n; i++) {\n        queue[rear] = i;\n        rear++;\n    }\n    while (rear - front > 1) {\n        for (int j = 1; j < k; j++) {\n            queue[rear] = queue[front];\n            rear++;\n            front++;\n        }\n        printf(\"Eliminated: %d\\n\", queue[front]);\n        front++;\n    }\n    printf(\"Winner: %d\\n\", queue[front]);\n}",
        "samples": [
          {
            "input": "3 2",
            "expected": "Eliminated: 2\nEliminated: 1\nWinner: 3"
          },
          {
            "input": "5 3",
            "expected": "Eliminated: 3\nEliminated: 1\nEliminated: 5\nEliminated: 2\nWinner: 4"
          }
        ],
        "hidden_cases": [
          {
            "input": "1 3\n",
            "expected": "Winner: 1"
          },
          {
            "input": "4 1\n",
            "expected": "Eliminated: 1\nEliminated: 2\nEliminated: 3\nWinner: 4"
          },
          {
            "input": "7 5\n",
            "expected": "Eliminated: 5\nEliminated: 3\nEliminated: 2\nEliminated: 4\nEliminated: 7\nEliminated: 1\nWinner: 6"
          },
          {
            "input": "10 4\n",
            "expected": "Eliminated: 4\nEliminated: 8\nEliminated: 2\nEliminated: 7\nEliminated: 3\nEliminated: 10\nEliminated: 9\nEliminated: 1\nEliminated: 6\nWinner: 5"
          }
        ]
      }
    ],
    "cod": [
      {
        "id": "u2_c1",
        "title": "Q1. BALANCED BRACKETS USING STACK",
        "ps": "Nikhil is building a small code editor and wants it to warn the programmer whenever the brackets in a line of code are not properly balanced. Write a program that reads a string of brackets and prints 'Balanced' or 'Not Balanced'.",
        "sampleIn": "(())",
        "sampleOut": "Balanced",
        "hidden": [
          {
            "input": "(())\n",
            "expected": "Balanced"
          },
          {
            "input": "{[}\n",
            "expected": "Not Balanced"
          },
          {
            "input": "()[]{}\n",
            "expected": "Balanced"
          },
          {
            "input": "([{}])\n",
            "expected": "Balanced"
          },
          {
            "input": "(]\n",
            "expected": "Not Balanced"
          },
          {
            "input": ")(\n",
            "expected": "Not Balanced"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    char s[105];\n    char stack[105];\n    int top = -1;\n    int balanced = 1;\n    scanf(\"%s\", s);\n    for (int i = 0; s[i] != '\\0'; i++) {\n        char c = s[i];\n        if (c == '(' || c == '[' || c == '{') {\n            top++;\n            stack[top] = c;\n        } else {\n            if (top < 0) {\n                balanced = 0;\n                break;\n            }\n            char open = stack[top];\n            top--;\n            if ((c == ')' && open != '(') ||\n                (c == ']' && open != '[') ||\n                (c == '}' && open != '{')) {\n                balanced = 0;\n                break;\n            }\n        }\n    }\n    if (top >= 0) {\n        balanced = 0;\n    }\n    if (balanced) {\n        printf(\"Balanced\\n\");\n    } else {\n        printf(\"Not Balanced\\n\");\n    }\n    return 0;\n}",
        "samples": [
          {
            "input": "(())",
            "expected": "Balanced"
          },
          {
            "input": "{[}",
            "expected": "Not Balanced"
          }
        ],
        "hidden_cases": [
          {
            "input": "()[]{}\n",
            "expected": "Balanced"
          },
          {
            "input": "([{}])\n",
            "expected": "Balanced"
          },
          {
            "input": "(]\n",
            "expected": "Not Balanced"
          },
          {
            "input": ")(\n",
            "expected": "Not Balanced"
          }
        ]
      },
      {
        "id": "u2_c2",
        "title": "Q2. EVALUATE POSTFIX EXPRESSION USING STACK",
        "ps": "Write a program that reads a postfix expression made of single-digit operands and operators +, -, *, /, and evaluates it using a stack. Print 'Result: ' followed by the result.",
        "sampleIn": "45*",
        "sampleOut": "Result: 20",
        "hidden": [
          {
            "input": "45*\n",
            "expected": "Result: 20"
          },
          {
            "input": "84/5+\n",
            "expected": "Result: 7"
          },
          {
            "input": "23+\n",
            "expected": "Result: 5"
          },
          {
            "input": "53-2*\n",
            "expected": "Result: 4"
          },
          {
            "input": "82/3+\n",
            "expected": "Result: 7"
          },
          {
            "input": "234*+\n",
            "expected": "Result: 14"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    char s[55];\n    int stack[55];\n    int top = -1;\n    scanf(\"%s\", s);\n    for (int i = 0; s[i] != '\\0'; i++) {\n        char c = s[i];\n        if (c >= '0' && c <= '9') {\n            top++;\n            stack[top] = c - '0';\n        } else {\n            int b = stack[top];\n            top--;\n            int a = stack[top];\n            top--;\n            int res = 0;\n            if (c == '+') res = a + b;\n            else if (c == '-') res = a - b;\n            else if (c == '*') res = a * b;\n            else if (c == '/') res = a / b;\n            top++;\n            stack[top] = res;\n        }\n    }\n    printf(\"Result: %d\\n\", stack[top]);\n    return 0;\n}",
        "samples": [
          {
            "input": "45*",
            "expected": "Result: 20"
          },
          {
            "input": "84/5+",
            "expected": "Result: 7"
          }
        ],
        "hidden_cases": [
          {
            "input": "23+\n",
            "expected": "Result: 5"
          },
          {
            "input": "53-2*\n",
            "expected": "Result: 4"
          },
          {
            "input": "82/3+\n",
            "expected": "Result: 7"
          },
          {
            "input": "234*+\n",
            "expected": "Result: 14"
          }
        ]
      },
      {
        "id": "u2_c3",
        "title": "Q3. CIRCULAR QUEUE IMPLEMENTATION",
        "ps": "Process a list of operations on a circular queue of capacity c. Operation 1 x enqueues x (or 'Queue is full'). Operation 2 dequeues (or 'Queue is empty'). Print remaining queue elements at the end.",
        "sampleIn": "2\n3\n1 7\n1 8\n2",
        "sampleOut": "Dequeued: 7\nQueue: 8",
        "hidden": [
          {
            "input": "2\n3\n1 7\n1 8\n2\n",
            "expected": "Dequeued: 7\nQueue: 8"
          },
          {
            "input": "3\n2\n2\n2\n",
            "expected": "Queue is empty\nQueue is empty\nQueue: Empty"
          },
          {
            "input": "3\n4\n1 10\n1 20\n1 30\n2\n",
            "expected": "Dequeued: 10\nQueue: 20 30"
          },
          {
            "input": "2\n4\n2\n1 5\n1 6\n1 7\n",
            "expected": "Queue is empty\nQueue is full\nQueue: 5 6"
          },
          {
            "input": "3\n7\n1 1\n1 2\n1 3\n2\n2\n1 4\n1 5\n",
            "expected": "Dequeued: 1\nDequeued: 2\nQueue: 3 4 5"
          },
          {
            "input": "4\n4\n1 9\n2\n2\n1 8\n",
            "expected": "Dequeued: 9\nQueue is empty\nQueue: 8"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int c, m;\n    int q[105];\n    int front = 0, rear = 0, count = 0;\n    scanf(\"%d\", &c);\n    scanf(\"%d\", &m);\n    for (int i = 0; i < m; i++) {\n        int t;\n        scanf(\"%d\", &t);\n        if (t == 1) {\n            int x;\n            scanf(\"%d\", &x);\n            if (count == c) {\n                printf(\"Queue is full\\n\");\n            } else {\n                q[rear] = x;\n                rear = (rear + 1) % c;\n                count++;\n            }\n        } else {\n            if (count == 0) {\n                printf(\"Queue is empty\\n\");\n            } else {\n                printf(\"Dequeued: %d\\n\", q[front]);\n                front = (front + 1) % c;\n                count--;\n            }\n        }\n    }\n    if (count == 0) {\n        printf(\"Queue: Empty\\n\");\n    } else {\n        printf(\"Queue:\");\n        for (int i = 0; i < count; i++) {\n            printf(\" %d\", q[(front + i) % c]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "samples": [
          {
            "input": "2\n3\n1 7\n1 8\n2",
            "expected": "Dequeued: 7\nQueue: 8"
          },
          {
            "input": "3\n2\n2\n2",
            "expected": "Queue is empty\nQueue is empty\nQueue: Empty"
          }
        ],
        "hidden_cases": [
          {
            "input": "3\n4\n1 10\n1 20\n1 30\n2\n",
            "expected": "Dequeued: 10\nQueue: 20 30"
          },
          {
            "input": "2\n4\n2\n1 5\n1 6\n1 7\n",
            "expected": "Queue is empty\nQueue is full\nQueue: 5 6"
          },
          {
            "input": "3\n7\n1 1\n1 2\n1 3\n2\n2\n1 4\n1 5\n",
            "expected": "Dequeued: 1\nDequeued: 2\nQueue: 3 4 5"
          },
          {
            "input": "4\n4\n1 9\n2\n2\n1 8\n",
            "expected": "Dequeued: 9\nQueue is empty\nQueue: 8"
          }
        ]
      },
      {
        "id": "u2_c4",
        "title": "Q4. DOUBLE-ENDED QUEUE (DEQUE) IMPLEMENTATION",
        "ps": "Process deque operations: 1 x = insert front, 2 x = insert rear, 3 = delete front, 4 = delete rear. Print deletion result or 'Deque is empty', and print final deque elements.",
        "sampleIn": "4\n1 7\n2 8\n3\n2 9",
        "sampleOut": "Deleted: 7\nDeque: 8 9",
        "hidden": [
          {
            "input": "4\n1 7\n2 8\n3\n2 9\n",
            "expected": "Deleted: 7\nDeque: 8 9"
          },
          {
            "input": "3\n2 15\n4\n3\n",
            "expected": "Deleted: 15\nDeque is empty\nDeque: Empty"
          },
          {
            "input": "5\n1 10\n2 20\n1 5\n3\n4\n",
            "expected": "Deleted: 5\nDeleted: 20\nDeque: 10"
          },
          {
            "input": "2\n3\n4\n",
            "expected": "Deque is empty\nDeque is empty\nDeque: Empty"
          },
          {
            "input": "6\n2 1\n2 2\n2 3\n3\n3\n3\n",
            "expected": "Deleted: 1\nDeleted: 2\nDeleted: 3\nDeque: Empty"
          },
          {
            "input": "7\n1 1\n1 2\n1 3\n4\n4\n4\n4\n",
            "expected": "Deleted: 1\nDeleted: 2\nDeleted: 3\nDeque is empty\nDeque: Empty"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int m;\n    int d[255];\n    int front = 100, rear = 100;\n    scanf(\"%d\", &m);\n    for (int i = 0; i < m; i++) {\n        int t;\n        scanf(\"%d\", &t);\n        if (t == 1) {\n            int x;\n            scanf(\"%d\", &x);\n            front--;\n            d[front] = x;\n        } else if (t == 2) {\n            int x;\n            scanf(\"%d\", &x);\n            d[rear] = x;\n            rear++;\n        } else if (t == 3) {\n            if (front == rear) {\n                printf(\"Deque is empty\\n\");\n            } else {\n                printf(\"Deleted: %d\\n\", d[front]);\n                front++;\n            }\n        } else if (t == 4) {\n            if (front == rear) {\n                printf(\"Deque is empty\\n\");\n            } else {\n                rear--;\n                printf(\"Deleted: %d\\n\", d[rear]);\n            }\n        }\n    }\n    if (front == rear) {\n        printf(\"Deque: Empty\\n\");\n    } else {\n        printf(\"Deque:\");\n        for (int i = front; i < rear; i++) {\n            printf(\" %d\", d[i]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "samples": [
          {
            "input": "4\n1 7\n2 8\n3\n2 9",
            "expected": "Deleted: 7\nDeque: 8 9"
          },
          {
            "input": "3\n2 15\n4\n3",
            "expected": "Deleted: 15\nDeque is empty\nDeque: Empty"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n1 10\n2 20\n1 5\n3\n4\n",
            "expected": "Deleted: 5\nDeleted: 20\nDeque: 10"
          },
          {
            "input": "2\n3\n4\n",
            "expected": "Deque is empty\nDeque is empty\nDeque: Empty"
          },
          {
            "input": "6\n2 1\n2 2\n2 3\n3\n3\n3\n",
            "expected": "Deleted: 1\nDeleted: 2\nDeleted: 3\nDeque: Empty"
          },
          {
            "input": "7\n1 1\n1 2\n1 3\n4\n4\n4\n4\n",
            "expected": "Deleted: 1\nDeleted: 2\nDeleted: 3\nDeque is empty\nDeque: Empty"
          }
        ]
      }
    ]
  },
  "u3": {
    "name": "Unit 3: Trees, BST, AVL & Heaps",
    "mcq": [
      {
        "id": "u3_m1",
        "q": "Which of the following traversals visits the root node first?",
        "o": [
          "Preorder",
          "Inorder",
          "Postorder",
          "Reverse inorder"
        ],
        "a": 0
      },
      {
        "id": "u3_m2",
        "q": "If height is counted in edges, what is the height of a tree that contains only the root node?",
        "o": [
          "1",
          "2",
          "-1",
          "0"
        ],
        "a": 3
      },
      {
        "id": "u3_m3",
        "q": "What is a node that has no children called in a tree?",
        "o": [
          "Leaf node",
          "Root node",
          "Parent node",
          "Sibling node"
        ],
        "a": 0
      },
      {
        "id": "u3_m4",
        "q": "In which order are the nodes visited in an inorder traversal?",
        "o": [
          "Root, Left, Right",
          "Left, Root, Right",
          "Left, Right, Root",
          "Right, Root, Left"
        ],
        "a": 1
      },
      {
        "id": "u3_m5",
        "q": "A tree with n nodes has how many edges?",
        "o": [
          "n",
          "n + 1",
          "n - 1",
          "n / 2"
        ],
        "a": 2
      },
      {
        "id": "u3_m6",
        "q": "Which traversal of an expression tree gives the postfix form of the expression?",
        "o": [
          "Postorder",
          "Preorder",
          "Inorder",
          "Level order"
        ],
        "a": 0
      },
      {
        "id": "u3_m7",
        "q": "If the root is at level 0, what is the maximum number of nodes at level i of a binary tree?",
        "o": [
          "2i",
          "2^i",
          "i^2",
          "2^(i+1)"
        ],
        "a": 1
      },
      {
        "id": "u3_m8",
        "q": "Which property holds for every node in a binary search tree?",
        "o": [
          "All keys in the left subtree are greater than the node's key",
          "Keys in both subtrees are equal to the node's key",
          "Both subtrees have the same number of nodes",
          "Keys in the left subtree are smaller and keys in the right subtree are larger"
        ],
        "a": 3
      },
      {
        "id": "u3_m9",
        "q": "What do the leaf nodes of an expression tree contain?",
        "o": [
          "Operators",
          "Parentheses",
          "Operands",
          "Function names"
        ],
        "a": 2
      },
      {
        "id": "u3_m10",
        "q": "What is the maximum number of children a node can have in a binary tree?",
        "o": [
          "1",
          "3",
          "4",
          "2"
        ],
        "a": 3
      },
      {
        "id": "u3_m11",
        "q": "Where is the smallest element located in a binary search tree?",
        "o": [
          "The root node",
          "The rightmost node",
          "The leftmost node",
          "The last inserted node"
        ],
        "a": 2
      },
      {
        "id": "u3_m12",
        "q": "Which rotation fixes the Left-Left imbalance case in an AVL tree?",
        "o": [
          "Single right rotation",
          "Single left rotation",
          "Left-right double rotation",
          "Right-left double rotation"
        ],
        "a": 0
      },
      {
        "id": "u3_m13",
        "q": "In the array representation of a binary heap with the root at index 0, what is the index of the left child of the node at index i?",
        "o": [
          "i / 2",
          "2 * i",
          "2 * i + 2",
          "2 * i + 1"
        ],
        "a": 3
      },
      {
        "id": "u3_m14",
        "q": "Which element is removed first from a priority queue?",
        "o": [
          "The element inserted first",
          "The element inserted last",
          "The element with the highest priority",
          "The element in the middle"
        ],
        "a": 2
      },
      {
        "id": "u3_m15",
        "q": "Which balance factor values are allowed for every node in an AVL tree?",
        "o": [
          "0 and 1 only",
          "-1, 0 or 1",
          "-2 to 2",
          "Any positive integer"
        ],
        "a": 1
      },
      {
        "id": "u3_m16",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\nvoid preorder(struct Node *p) {\n    if (p == NULL)\n        return;\n    printf(\"%d \", p->data);\n    preorder(p->left);\n    preorder(p->right);\n}\nint main() {\n    struct Node n4 = {4, NULL, NULL};\n    struct Node n5 = {5, NULL, NULL};\n    struct Node n3 = {3, NULL, NULL};\n    struct Node n2 = {2, &n4, &n5};\n    struct Node n1 = {1, &n2, &n3};\n    preorder(&n1);\n    return 0;\n}",
        "o": [
          "4 2 5 1 3",
          "1 2 4 5 3",
          "4 5 2 3 1",
          "1 2 3 4 5"
        ],
        "a": 1
      },
      {
        "id": "u3_m17",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\nint main() {\n    struct Node e = {40, NULL, NULL};\n    struct Node d = {20, NULL, NULL};\n    struct Node c = {70, NULL, NULL};\n    struct Node b = {30, &d, &e};\n    struct Node a = {50, &b, &c};\n    struct Node *p = &a;\n    while (p->left != NULL)\n        p = p->left;\n    printf(\"%d\", p->data);\n    return 0;\n}",
        "o": [
          "50",
          "30",
          "70",
          "20"
        ],
        "a": 3
      },
      {
        "id": "u3_m18",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\nint height(struct Node *n) {\n    if (n == NULL)\n        return 0;\n    int l = height(n->left);\n    int r = height(n->right);\n    return 1 + (l > r ? l : r);\n}\nint main() {\n    struct Node n10 = {10, NULL, NULL};\n    struct Node n20 = {20, &n10, NULL};\n    struct Node n30 = {30, &n20, NULL};\n    int bf = height(n30.left) - height(n30.right);\n    printf(\"%d %d\", height(&n30), bf);\n    return 0;\n}",
        "o": [
          "2 3",
          "3 2",
          "3 1",
          "2 2"
        ],
        "a": 1
      },
      {
        "id": "u3_m19",
        "q": "What is the output of the following C code for the expression tree of (3 + 4) * 2?",
        "code": "#include <stdio.h>\nstruct Node {\n    char ch;\n    struct Node *left, *right;\n};\nvoid postorder(struct Node *p) {\n    if (p == NULL)\n        return;\n    postorder(p->left);\n    postorder(p->right);\n    printf(\"%c\", p->ch);\n}\nint main() {\n    struct Node three = {'3', NULL, NULL};\n    struct Node four = {'4', NULL, NULL};\n    struct Node two = {'2', NULL, NULL};\n    struct Node plus = {'+', &three, &four};\n    struct Node mul = {'*', &plus, &two};\n    postorder(&mul);\n    return 0;\n}",
        "o": [
          "34+2*",
          "*+342",
          "3+4*2",
          "342+*"
        ],
        "a": 0
      },
      {
        "id": "u3_m20",
        "q": "What is the output of the following C code, which inserts 5 into a min-heap stored in an array?",
        "code": "#include <stdio.h>\nint main() {\n    int h[10] = {10, 20, 30, 40, 50};\n    int n = 5, i = n, t;\n    h[n] = 5;\n    n++;\n    while (i > 0 && h[(i - 1) / 2] > h[i]) {\n        t = h[i];\n        h[i] = h[(i - 1) / 2];\n        h[(i - 1) / 2] = t;\n        i = (i - 1) / 2;\n    }\n    for (i = 0; i < n; i++)\n        printf(\"%d \", h[i]);\n    return 0;\n}",
        "o": [
          "5 10 20 30 40 50",
          "10 20 30 40 50 5",
          "5 20 10 40 50 30",
          "5 20 30 40 50 10"
        ],
        "a": 2
      }
    ],
    "debug": [
      {
        "id": "u3_d1",
        "title": "Q1. FIND MINIMUM IN A BINARY SEARCH TREE",
        "ps": "Suresh keeps the book IDs of a library in a binary search tree. Debug findMin() so that the program prints the smallest book ID in the tree.",
        "sampleIn": "5\n30 20 40 10 25",
        "sampleOut": "Minimum: 10",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *left;\n    struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n    if (root == NULL) {\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x; node->left = NULL; node->right = NULL;\n        return node;\n    }\n    if (x < root->data) root->left = insert(root->left, x);\n    else root->right = insert(root->right, x);\n    return root;\n}",
        "buggy": "int findMin(struct Node *root) {\n    struct Node *curr = root;\n    while (curr->right != NULL)\n        curr = curr->right;\n    return curr->data;\n}",
        "footer": "int main() {\n    int n;\n    struct Node *root = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        root = insert(root, x);\n    }\n    printf(\"Minimum: %d\\n\", findMin(root));\n    return 0;\n}",
        "hidden": [
          {
            "input": "5\n30 20 40 10 25\n",
            "expected": "Minimum: 10"
          },
          {
            "input": "4\n15 18 12 9\n",
            "expected": "Minimum: 9"
          },
          {
            "input": "1\n10\n",
            "expected": "Minimum: 10"
          },
          {
            "input": "6\n10 20 30 40 50 60\n",
            "expected": "Minimum: 10"
          },
          {
            "input": "8\n8 3 10 1 6 14 4 7\n",
            "expected": "Minimum: 1"
          },
          {
            "input": "7\n90 60 120 40 70 100 150\n",
            "expected": "Minimum: 40"
          }
        ],
        "sol": "int findMin(struct Node *root) {\n    struct Node *curr = root;\n    while (curr->left != NULL)\n        curr = curr->left;\n    return curr->data;\n}",
        "samples": [
          {
            "input": "5\n30 20 40 10 25",
            "expected": "Minimum: 10"
          },
          {
            "input": "4\n15 18 12 9",
            "expected": "Minimum: 9"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n10\n",
            "expected": "Minimum: 10"
          },
          {
            "input": "6\n10 20 30 40 50 60\n",
            "expected": "Minimum: 10"
          },
          {
            "input": "8\n8 3 10 1 6 14 4 7\n",
            "expected": "Minimum: 1"
          },
          {
            "input": "7\n90 60 120 40 70 100 150\n",
            "expected": "Minimum: 40"
          }
        ]
      },
      {
        "id": "u3_d2",
        "title": "Q2. COUNT LEAF NODES IN A BINARY SEARCH TREE",
        "ps": "Hema wants a program that counts all the leaf nodes of a binary search tree using recursion. Debug countLeaves() so that the program prints the expected number of leaf nodes.",
        "sampleIn": "3\n20 10 30",
        "sampleOut": "Leaf Nodes: 2",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *left;\n    struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n    if (root == NULL) {\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x; node->left = NULL; node->right = NULL;\n        return node;\n    }\n    if (x < root->data) root->left = insert(root->left, x);\n    else root->right = insert(root->right, x);\n    return root;\n}",
        "buggy": "int countLeaves(struct Node *root) {\n    if (root == NULL)\n        return 1;\n    if (root->left == NULL && root->right == NULL)\n        return 0;\n    return countLeaves(root->left) + countLeaves(root->right);\n}",
        "footer": "int main() {\n    int n;\n    struct Node *root = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        root = insert(root, x);\n    }\n    printf(\"Leaf Nodes: %d\\n\", countLeaves(root));\n    return 0;\n}",
        "hidden": [
          {
            "input": "3\n20 10 30\n",
            "expected": "Leaf Nodes: 2"
          },
          {
            "input": "4\n20 40 30 50\n",
            "expected": "Leaf Nodes: 2"
          },
          {
            "input": "1\n10\n",
            "expected": "Leaf Nodes: 1"
          },
          {
            "input": "4\n10 20 30 40\n",
            "expected": "Leaf Nodes: 1"
          },
          {
            "input": "7\n10 40 20 60 30 50 70\n",
            "expected": "Leaf Nodes: 3"
          },
          {
            "input": "8\n30 60 40 50 45 55 70 80\n",
            "expected": "Leaf Nodes: 3"
          }
        ],
        "sol": "int countLeaves(struct Node *root) {\n    if (root == NULL)\n        return 0;\n    if (root->left == NULL && root->right == NULL)\n        return 1;\n    return countLeaves(root->left) + countLeaves(root->right);\n}",
        "samples": [
          {
            "input": "3\n20 10 30",
            "expected": "Leaf Nodes: 2"
          },
          {
            "input": "4\n20 40 30 50",
            "expected": "Leaf Nodes: 2"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n10\n",
            "expected": "Leaf Nodes: 1"
          },
          {
            "input": "4\n10 20 30 40\n",
            "expected": "Leaf Nodes: 1"
          },
          {
            "input": "7\n10 40 20 60 30 50 70\n",
            "expected": "Leaf Nodes: 3"
          },
          {
            "input": "8\n30 60 40 50 45 55 70 80\n",
            "expected": "Leaf Nodes: 3"
          }
        ]
      },
      {
        "id": "u3_d3",
        "title": "Q3. EXTRACT MINIMUM FROM A MIN-HEAP",
        "ps": "Tickets are stored in a binary min-heap kept in an array. Debug extractMin() so that the program correctly removes and prints the first k tickets served in order of priority.",
        "sampleIn": "4\n12 7 3 9\n2",
        "sampleOut": "Extracted: 3 7",
        "header": "#include <stdio.h>\nint heap[105];\nint size = 0;\nvoid insert(int x) {\n    heap[size] = x;\n    int i = size; size++;\n    while (i > 0 && heap[(i - 1) / 2] > heap[i]) {\n        int parent = (i - 1) / 2;\n        int temp = heap[parent];\n        heap[parent] = heap[i];\n        heap[i] = temp;\n        i = parent;\n    }\n}",
        "buggy": "int extractMin() {\n    int minValue = heap[0];\n    size--;\n    heap[0] = heap[size];\n    int i = 0;\n    while (2 * i + 1 < size) {\n        int child = 2 * i + 1;\n        if (child + 1 < size && heap[child + 1] > heap[child])\n            child++;\n        if (heap[i] >= heap[child])\n            break;\n        int temp = heap[i];\n        heap[i] = heap[child];\n        heap[child] = temp;\n        i = child;\n    }\n    return minValue;\n}",
        "footer": "int main() {\n    int n, k;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        insert(x);\n    }\n    scanf(\"%d\", &k);\n    printf(\"Extracted:\");\n    for (int i = 0; i < k; i++)\n        printf(\" %d\", extractMin());\n    printf(\"\\n\");\n    return 0;\n}",
        "hidden": [
          {
            "input": "4\n12 7 3 9\n2\n",
            "expected": "Extracted: 3 7"
          },
          {
            "input": "5\n20 15 10 5 1\n3\n",
            "expected": "Extracted: 1 5 10"
          },
          {
            "input": "1\n7\n1\n",
            "expected": "Extracted: 7"
          },
          {
            "input": "4\n9 4 7 1\n4\n",
            "expected": "Extracted: 1 4 7 9"
          },
          {
            "input": "8\n9 8 7 6 5 4 3 2\n5\n",
            "expected": "Extracted: 2 3 4 5 6"
          },
          {
            "input": "7\n15 10 20 5 30 25 1\n7\n",
            "expected": "Extracted: 1 5 10 15 20 25 30"
          }
        ],
        "sol": "int extractMin() {\n    int minValue = heap[0];\n    size--;\n    heap[0] = heap[size];\n    int i = 0;\n    while (2 * i + 1 < size) {\n        int child = 2 * i + 1;\n        if (child + 1 < size && heap[child + 1] < heap[child])\n            child++;\n        if (heap[i] <= heap[child])\n            break;\n        int temp = heap[i];\n        heap[i] = heap[child];\n        heap[child] = temp;\n        i = child;\n    }\n    return minValue;\n}",
        "samples": [
          {
            "input": "4\n12 7 3 9\n2",
            "expected": "Extracted: 3 7"
          },
          {
            "input": "5\n20 15 10 5 1\n3",
            "expected": "Extracted: 1 5 10"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n7\n1\n",
            "expected": "Extracted: 7"
          },
          {
            "input": "4\n9 4 7 1\n4\n",
            "expected": "Extracted: 1 4 7 9"
          },
          {
            "input": "8\n9 8 7 6 5 4 3 2\n5\n",
            "expected": "Extracted: 2 3 4 5 6"
          },
          {
            "input": "7\n15 10 20 5 30 25 1\n7\n",
            "expected": "Extracted: 1 5 10 15 20 25 30"
          }
        ]
      },
      {
        "id": "u3_d4",
        "title": "Q4. CHECK WHETHER A BINARY SEARCH TREE IS BALANCED",
        "ps": "A tree is balanced when, for every node, heights of left and right subtrees differ by at most 1. Debug height() and isBalanced() so the program prints 'Balanced' or 'Not Balanced'.",
        "sampleIn": "4\n20 10 30 25",
        "sampleOut": "Balanced",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *left;\n    struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n    if (root == NULL) {\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x; node->left = NULL; node->right = NULL;\n        return node;\n    }\n    if (x < root->data) root->left = insert(root->left, x);\n    else root->right = insert(root->right, x);\n    return root;\n}\nint max(int a, int b) { return (a > b) ? a : b; }",
        "buggy": "int height(struct Node *root) {\n    if (root == NULL) return 0;\n    return max(height(root->left), height(root->right));\n}\nint isBalanced(struct Node *root) {\n    if (root == NULL) return 1;\n    int leftHeight = height(root->left);\n    int rightHeight = height(root->right);\n    int diff = leftHeight - rightHeight;\n    if (diff > 0 || diff < 0) return 0;\n    return isBalanced(root->left) && isBalanced(root->right);\n}",
        "footer": "int main() {\n    int n;\n    struct Node *root = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        root = insert(root, x);\n    }\n    if (isBalanced(root))\n        printf(\"Balanced\\n\");\n    else\n        printf(\"Not Balanced\\n\");\n    return 0;\n}",
        "hidden": [
          {
            "input": "4\n20 10 30 25\n",
            "expected": "Balanced"
          },
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Not Balanced"
          },
          {
            "input": "1\n10\n",
            "expected": "Balanced"
          },
          {
            "input": "3\n30 20 10\n",
            "expected": "Not Balanced"
          },
          {
            "input": "6\n40 20 60 10 30 50\n",
            "expected": "Balanced"
          },
          {
            "input": "6\n10 20 30 40 50 60\n",
            "expected": "Not Balanced"
          }
        ],
        "sol": "int height(struct Node *root) {\n    if (root == NULL)\n        return 0;\n    return 1 + max(height(root->left), height(root->right));\n}\nint isBalanced(struct Node *root) {\n    if (root == NULL)\n        return 1;\n    int leftHeight = height(root->left);\n    int rightHeight = height(root->right);\n    int diff = leftHeight - rightHeight;\n    if (diff > 1 || diff < -1)\n        return 0;\n    return isBalanced(root->left) && isBalanced(root->right);\n}",
        "samples": [
          {
            "input": "4\n20 10 30 25",
            "expected": "Balanced"
          },
          {
            "input": "4\n1 2 3 4",
            "expected": "Not Balanced"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n10\n",
            "expected": "Balanced"
          },
          {
            "input": "3\n30 20 10\n",
            "expected": "Not Balanced"
          },
          {
            "input": "6\n40 20 60 10 30 50\n",
            "expected": "Balanced"
          },
          {
            "input": "6\n10 20 30 40 50 60\n",
            "expected": "Not Balanced"
          }
        ]
      },
      {
        "id": "u3_d5",
        "title": "Q5. FIND THE HEIGHT OF A BINARY SEARCH TREE",
        "ps": "The height of a tree is the number of edges on the longest path from root to leaf (root-only tree has height 0, empty tree has height -1). Debug height() so that the program prints the expected height.",
        "sampleIn": "5\n30 20 40 10 25",
        "sampleOut": "Height: 2",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *left;\n    struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n    if (root == NULL) {\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x; node->left = NULL; node->right = NULL;\n        return node;\n    }\n    if (x < root->data) root->left = insert(root->left, x);\n    else root->right = insert(root->right, x);\n    return root;\n}",
        "buggy": "int height(struct Node *root) {\n    if (root == NULL)\n        return 0;\n    int leftHeight = height(root->left);\n    int rightHeight = height(root->right);\n    return (leftHeight > rightHeight) ? leftHeight : rightHeight;\n}",
        "footer": "int main() {\n    int n;\n    struct Node *root = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        root = insert(root, x);\n    }\n    printf(\"Height: %d\\n\", height(root));\n    return 0;\n}",
        "hidden": [
          {
            "input": "5\n30 20 40 10 25\n",
            "expected": "Height: 2"
          },
          {
            "input": "4\n5 4 3 2\n",
            "expected": "Height: 3"
          },
          {
            "input": "1\n10\n",
            "expected": "Height: 0"
          },
          {
            "input": "4\n10 20 30 40\n",
            "expected": "Height: 3"
          },
          {
            "input": "8\n8 3 10 1 6 14 4 7\n",
            "expected": "Height: 3"
          },
          {
            "input": "6\n50 40 30 20 10 60\n",
            "expected": "Height: 4"
          }
        ],
        "sol": "int height(struct Node *root) {\n    if (root == NULL)\n        return -1;\n    int leftHeight = height(root->left);\n    int rightHeight = height(root->right);\n    return 1 + ((leftHeight > rightHeight) ? leftHeight : rightHeight);\n}",
        "samples": [
          {
            "input": "5\n30 20 40 10 25",
            "expected": "Height: 2"
          },
          {
            "input": "4\n5 4 3 2",
            "expected": "Height: 3"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n10\n",
            "expected": "Height: 0"
          },
          {
            "input": "4\n10 20 30 40\n",
            "expected": "Height: 3"
          },
          {
            "input": "8\n8 3 10 1 6 14 4 7\n",
            "expected": "Height: 3"
          },
          {
            "input": "6\n50 40 30 20 10 60\n",
            "expected": "Height: 4"
          }
        ]
      }
    ],
    "cod": [
      {
        "id": "u3_c1",
        "title": "Q1. TREE TRAVERSALS USING ARRAY REPRESENTATION",
        "ps": "Employee IDs are stored level by level in a complete binary tree in an array (node at i has left at 2i+1, right at 2i+2). Print Preorder, Inorder, and Postorder traversals.",
        "sampleIn": "4\n15 10 20 5",
        "sampleOut": "Preorder: 15 10 5 20\nInorder: 5 10 15 20\nPostorder: 5 10 20 15",
        "hidden": [
          {
            "input": "4\n15 10 20 5\n",
            "expected": "Preorder: 15 10 5 20\nInorder: 5 10 15 20\nPostorder: 5 10 20 15"
          },
          {
            "input": "6\n2 4 6 8 10 12\n",
            "expected": "Preorder: 2 4 8 10 6 12\nInorder: 8 4 10 2 12 6\nPostorder: 8 10 4 12 6 2"
          },
          {
            "input": "7\n1 2 3 4 5 6 7\n",
            "expected": "Preorder: 1 2 4 5 3 6 7\nInorder: 4 2 5 1 6 3 7\nPostorder: 4 5 2 6 7 3 1"
          },
          {
            "input": "1\n10\n",
            "expected": "Preorder: 10\nInorder: 10\nPostorder: 10"
          },
          {
            "input": "3\n5 3 8\n",
            "expected": "Preorder: 5 3 8\nInorder: 3 5 8\nPostorder: 3 8 5"
          },
          {
            "input": "5\n1 2 3 4 5\n",
            "expected": "Preorder: 1 2 4 5 3\nInorder: 4 2 5 1 3\nPostorder: 4 5 2 3 1"
          }
        ],
        "sol": "#include <stdio.h>\nint n;\nint a[105];\nint res[105];\nint cnt;\nvoid preorder(int i) {\n    if (i >= n) return;\n    res[cnt++] = a[i];\n    preorder(2 * i + 1);\n    preorder(2 * i + 2);\n}\nvoid inorder(int i) {\n    if (i >= n) return;\n    inorder(2 * i + 1);\n    res[cnt++] = a[i];\n    inorder(2 * i + 2);\n}\nvoid postorder(int i) {\n    if (i >= n) return;\n    postorder(2 * i + 1);\n    postorder(2 * i + 2);\n    res[cnt++] = a[i];\n}\nvoid show(char *label) {\n    printf(\"%s:\", label);\n    for (int i = 0; i < cnt; i++)\n        printf(\" %d\", res[i]);\n    printf(\"\\n\");\n}\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++)\n        scanf(\"%d\", &a[i]);\n    cnt = 0; preorder(0); show(\"Preorder\");\n    cnt = 0; inorder(0); show(\"Inorder\");\n    cnt = 0; postorder(0); show(\"Postorder\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4\n15 10 20 5",
            "expected": "Preorder: 15 10 5 20\nInorder: 5 10 15 20\nPostorder: 5 10 20 15"
          },
          {
            "input": "6\n2 4 6 8 10 12",
            "expected": "Preorder: 2 4 8 10 6 12\nInorder: 8 4 10 2 12 6\nPostorder: 8 10 4 12 6 2"
          }
        ],
        "hidden_cases": [
          {
            "input": "7\n1 2 3 4 5 6 7\n",
            "expected": "Preorder: 1 2 4 5 3 6 7\nInorder: 4 2 5 1 6 3 7\nPostorder: 4 5 2 6 7 3 1"
          },
          {
            "input": "1\n10\n",
            "expected": "Preorder: 10\nInorder: 10\nPostorder: 10"
          },
          {
            "input": "3\n5 3 8\n",
            "expected": "Preorder: 5 3 8\nInorder: 3 5 8\nPostorder: 3 8 5"
          },
          {
            "input": "5\n1 2 3 4 5\n",
            "expected": "Preorder: 1 2 4 5 3\nInorder: 4 2 5 1 3\nPostorder: 4 5 2 3 1"
          }
        ]
      },
      {
        "id": "u3_c2",
        "title": "Q2. INSERT ELEMENTS INTO A MIN-HEAP",
        "ps": "Write a program that inserts given priorities into an initially empty min-heap one by one and restores heap order upwards. Print the resulting array.",
        "sampleIn": "4\n12 7 3 9",
        "sampleOut": "Min-Heap: 3 9 7 12",
        "hidden": [
          {
            "input": "4\n12 7 3 9\n",
            "expected": "Min-Heap: 3 9 7 12"
          },
          {
            "input": "5\n20 15 10 5 1\n",
            "expected": "Min-Heap: 1 5 15 20 10"
          },
          {
            "input": "5\n5 3 8 1 2\n",
            "expected": "Min-Heap: 1 2 8 5 3"
          },
          {
            "input": "1\n7\n",
            "expected": "Min-Heap: 7"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Min-Heap: 1 2 3 4"
          },
          {
            "input": "6\n10 20 30 40 50 60\n",
            "expected": "Min-Heap: 10 20 30 40 50 60"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n;\n    int h[105];\n    int size = 0;\n    scanf(\"%d\", &n);\n    for (int k = 0; k < n; k++) {\n        int x;\n        scanf(\"%d\", &x);\n        h[size] = x;\n        int i = size;\n        size++;\n        while (i > 0 && h[(i - 1) / 2] > h[i]) {\n            int parent = (i - 1) / 2;\n            int temp = h[parent];\n            h[parent] = h[i];\n            h[i] = temp;\n            i = parent;\n        }\n    }\n    printf(\"Min-Heap:\");\n    for (int i = 0; i < size; i++)\n        printf(\" %d\", h[i]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4\n12 7 3 9",
            "expected": "Min-Heap: 3 9 7 12"
          },
          {
            "input": "5\n20 15 10 5 1",
            "expected": "Min-Heap: 1 5 15 20 10"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n5 3 8 1 2\n",
            "expected": "Min-Heap: 1 2 8 5 3"
          },
          {
            "input": "1\n7\n",
            "expected": "Min-Heap: 7"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Min-Heap: 1 2 3 4"
          },
          {
            "input": "6\n10 20 30 40 50 60\n",
            "expected": "Min-Heap: 10 20 30 40 50 60"
          }
        ]
      },
      {
        "id": "u3_c3",
        "title": "Q3. CONSTRUCT AN EXPRESSION TREE FROM POSTFIX EXPRESSION",
        "ps": "Read a postfix expression and build its expression tree using a stack of tree nodes. Print the fully parenthesized infix expression via inorder traversal.",
        "sampleIn": "xy-",
        "sampleOut": "Infix Expression: (x-y)",
        "hidden": [
          {
            "input": "xy-\n",
            "expected": "Infix Expression: (x-y)"
          },
          {
            "input": "pqr+-\n",
            "expected": "Infix Expression: (p-(q+r))"
          },
          {
            "input": "ab+\n",
            "expected": "Infix Expression: (a+b)"
          },
          {
            "input": "ab+c*\n",
            "expected": "Infix Expression: ((a+b)*c)"
          },
          {
            "input": "abc+*\n",
            "expected": "Infix Expression: (a*(b+c))"
          },
          {
            "input": "a\n",
            "expected": "Infix Expression: a"
          }
        ],
        "sol": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    char data;\n    struct Node *left;\n    struct Node *right;\n};\nstruct Node *newNode(char c) {\n    struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n    node->data = c;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n}\nvoid printInfix(struct Node *root) {\n    if (root == NULL) return;\n    if (root->left == NULL && root->right == NULL) {\n        printf(\"%c\", root->data);\n        return;\n    }\n    printf(\"(\");\n    printInfix(root->left);\n    printf(\"%c\", root->data);\n    printInfix(root->right);\n    printf(\")\");\n}\nint main() {\n    char s[55];\n    struct Node *stack[55];\n    int top = -1;\n    scanf(\"%s\", s);\n    for (int i = 0; s[i] != '\\0'; i++) {\n        char c = s[i];\n        struct Node *node = newNode(c);\n        if (c < 'a' || c > 'z') {\n            node->right = stack[top--];\n            node->left = stack[top--];\n        }\n        stack[++top] = node;\n    }\n    printf(\"Infix Expression: \");\n    printInfix(stack[top]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "xy-",
            "expected": "Infix Expression: (x-y)"
          },
          {
            "input": "pqr+-",
            "expected": "Infix Expression: (p-(q+r))"
          }
        ],
        "hidden_cases": [
          {
            "input": "ab+\n",
            "expected": "Infix Expression: (a+b)"
          },
          {
            "input": "ab+c*\n",
            "expected": "Infix Expression: ((a+b)*c)"
          },
          {
            "input": "abc+*\n",
            "expected": "Infix Expression: (a*(b+c))"
          },
          {
            "input": "a\n",
            "expected": "Infix Expression: a"
          }
        ]
      },
      {
        "id": "u3_c4",
        "title": "Q4. SEARCH FOR A KEY IN A BINARY SEARCH TREE AND FIND ITS DEPTH",
        "ps": "Build a BST from given distinct IDs and search for key. If key is present, print 'Found at depth d' (root is depth 0). If not present, print 'Not Found'.",
        "sampleIn": "5\n30 20 40 10 25\n25",
        "sampleOut": "Found at depth 2",
        "hidden": [
          {
            "input": "5\n30 20 40 10 25\n25\n",
            "expected": "Found at depth 2"
          },
          {
            "input": "3\n5 2 8\n9\n",
            "expected": "Not Found"
          },
          {
            "input": "7\n50 30 70 20 40 60 80\n60\n",
            "expected": "Found at depth 2"
          },
          {
            "input": "1\n10\n10\n",
            "expected": "Found at depth 0"
          },
          {
            "input": "5\n40 20 60 10 30\n55\n",
            "expected": "Not Found"
          },
          {
            "input": "6\n10 20 30 40 50 60\n60\n",
            "expected": "Found at depth 5"
          }
        ],
        "sol": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *left;\n    struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n    if (root == NULL) {\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x; node->left = NULL; node->right = NULL;\n        return node;\n    }\n    if (x < root->data) root->left = insert(root->left, x);\n    else root->right = insert(root->right, x);\n    return root;\n}\nint main() {\n    int n, key;\n    struct Node *root = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        root = insert(root, x);\n    }\n    scanf(\"%d\", &key);\n    struct Node *curr = root;\n    int depth = 0;\n    while (curr != NULL && curr->data != key) {\n        if (key < curr->data) curr = curr->left;\n        else curr = curr->right;\n        depth++;\n    }\n    if (curr == NULL) printf(\"Not Found\\n\");\n    else printf(\"Found at depth %d\\n\", depth);\n    return 0;\n}",
        "samples": [
          {
            "input": "5\n30 20 40 10 25\n25",
            "expected": "Found at depth 2"
          },
          {
            "input": "3\n5 2 8\n9",
            "expected": "Not Found"
          }
        ],
        "hidden_cases": [
          {
            "input": "7\n50 30 70 20 40 60 80\n60\n",
            "expected": "Found at depth 2"
          },
          {
            "input": "1\n10\n10\n",
            "expected": "Found at depth 0"
          },
          {
            "input": "5\n40 20 60 10 30\n55\n",
            "expected": "Not Found"
          },
          {
            "input": "6\n10 20 30 40 50 60\n60\n",
            "expected": "Found at depth 5"
          }
        ]
      }
    ]
  },
  "u4": {
    "name": "Unit 4: B-Trees & Graphs",
    "mcq": [
      {
        "id": "u4_m1",
        "q": "In a B-tree of order m, what is the maximum number of children a node can have?",
        "o": [
          "m - 1",
          "m",
          "m + 1",
          "2m"
        ],
        "a": 1
      },
      {
        "id": "u4_m2",
        "q": "How are the edges of a directed graph represented?",
        "o": [
          "As unordered pairs of vertices",
          "As ordered pairs of vertices, each with a direction",
          "As loops on every vertex only",
          "As vertices with no connections"
        ],
        "a": 1
      },
      {
        "id": "u4_m3",
        "q": "What is a B-tree?",
        "o": [
          "A self-balancing multiway search tree in which all leaves are at the same level",
          "A binary tree in which every node has exactly two children",
          "A graph with no cycles and no edges",
          "A heap-ordered tree used for priority queues"
        ],
        "a": 0
      },
      {
        "id": "u4_m4",
        "q": "Which statement is TRUE about a B+ tree?",
        "o": [
          "Data records are stored in internal nodes only",
          "Leaf nodes are not connected to each other",
          "All data records are stored in leaf nodes, which are linked together",
          "It is always a binary tree"
        ],
        "a": 2
      },
      {
        "id": "u4_m5",
        "q": "How is a graph G formally defined?",
        "o": [
          "A set of vertices only",
          "A set of edges only",
          "A list of nodes arranged in levels",
          "A set of vertices V and a set of edges E, written G = (V, E)"
        ],
        "a": 3
      },
      {
        "id": "u4_m6",
        "q": "Which data structure is used, explicitly or through recursion, in depth-first traversal?",
        "o": [
          "Stack",
          "Queue",
          "Heap",
          "Hash table"
        ],
        "a": 0
      },
      {
        "id": "u4_m7",
        "q": "A topological sort can be performed only on which kind of graph?",
        "o": [
          "Undirected graph with cycles",
          "Complete undirected graph",
          "Weighted undirected graph",
          "Directed acyclic graph (DAG)"
        ],
        "a": 3
      },
      {
        "id": "u4_m8",
        "q": "A connected undirected graph has an Euler circuit if and only if:",
        "o": [
          "It contains exactly two vertices of odd degree",
          "It has no cycles",
          "Every vertex has even degree",
          "Every vertex has degree one"
        ],
        "a": 2
      },
      {
        "id": "u4_m9",
        "q": "Which data structure is used to implement breadth-first traversal?",
        "o": [
          "Stack",
          "Priority queue",
          "Binary tree",
          "Queue"
        ],
        "a": 3
      },
      {
        "id": "u4_m10",
        "q": "Dijkstra's algorithm does not work correctly for graphs containing which kind of edges?",
        "o": [
          "Negative weight edges",
          "Zero weight edges",
          "Positive weight edges",
          "Undirected edges"
        ],
        "a": 0
      },
      {
        "id": "u4_m11",
        "q": "In a connected undirected graph, what is an articulation point?",
        "o": [
          "A vertex with the highest degree",
          "A vertex whose removal disconnects the graph",
          "A vertex with no edges",
          "A vertex that has a self-loop"
        ],
        "a": 1
      },
      {
        "id": "u4_m12",
        "q": "What is the space complexity of the adjacency matrix representation of a graph with n vertices?",
        "o": [
          "O(n)",
          "O(log n)",
          "O(n\u00b2)",
          "O(n + e)"
        ],
        "a": 2
      },
      {
        "id": "u4_m13",
        "q": "How many edges does a minimum spanning tree of a connected graph with n vertices have?",
        "o": [
          "n",
          "n - 1",
          "n + 1",
          "n - 2"
        ],
        "a": 1
      },
      {
        "id": "u4_m14",
        "q": "Which step is used by Kruskal's algorithm to build a minimum spanning tree?",
        "o": [
          "Start from a source vertex and relax its edges",
          "Pick the cheapest edge leaving the current tree",
          "Visit vertices level by level",
          "Add the smallest-weight edge that does not form a cycle"
        ],
        "a": 3
      },
      {
        "id": "u4_m15",
        "q": "How does Prim's algorithm build a minimum spanning tree?",
        "o": [
          "By sorting all edges and adding them in order of weight",
          "By repeatedly removing the heaviest edge from every cycle",
          "By growing a single tree from a start vertex, adding the cheapest edge to a new vertex each time",
          "By visiting vertices in topological order"
        ],
        "a": 2
      },
      {
        "id": "u4_m16",
        "q": "What is the output of the following C code, which runs BFS from vertex 0?",
        "code": "#include <stdio.h>\nint main() {\n    int g[4][4] = {{0,1,0,1},{1,0,1,0},{0,1,0,1},{1,0,1,0}};\n    int q[10], front = 0, rear = 0;\n    int visited[4] = {0};\n    int i, v;\n    q[rear++] = 0;\n    visited[0] = 1;\n    while (front < rear) {\n        v = q[front++];\n        printf(\"%d \", v);\n        for (i = 0; i < 4; i++) {\n            if (g[v][i] && !visited[i]) {\n                visited[i] = 1;\n                q[rear++] = i;\n            }\n        }\n    }\n    return 0;\n}",
        "o": [
          "0 1 3 2",
          "0 1 2 3",
          "0 2 1 3",
          "0 3 1 2"
        ],
        "a": 0
      },
      {
        "id": "u4_m17",
        "q": "What is the output of the following C code, which relaxes edges through vertex 2 after the first step of Dijkstra's algorithm from vertex 0?",
        "code": "#include <stdio.h>\nint main() {\n    int w[3][3] = {{0,4,1},{4,0,2},{1,2,0}};\n    int dist[3];\n    for (int i = 0; i < 3; i++)\n        dist[i] = w[0][i];\n    for (int i = 0; i < 3; i++) {\n        if (dist[2] + w[2][i] < dist[i])\n            dist[i] = dist[2] + w[2][i];\n    }\n    printf(\"%d %d %d\", dist[0], dist[1], dist[2]);\n    return 0;\n}",
        "o": [
          "0 3 1",
          "0 4 1",
          "0 3 2",
          "0 5 1"
        ],
        "a": 0
      },
      {
        "id": "u4_m18",
        "q": "What is the output of the following C code, which computes the in-degree of each vertex of a directed graph?",
        "code": "#include <stdio.h>\nint main() {\n    int g[4][4] = {{0,1,1,0},{0,0,0,0},{0,0,1,0},{0,0,0,0}};\n    int indeg[4] = {0};\n    int i, j;\n    for (i = 0; i < 4; i++)\n        for (j = 0; j < 4; j++)\n            indeg[j] += g[i][j];\n    for (i = 0; i < 4; i++)\n        printf(\"%d \", indeg[i]);\n    return 0;\n}",
        "o": [
          "2 1 1 0",
          "0 2 1 1",
          "1 1 1 1",
          "0 1 1 2"
        ],
        "a": 1
      },
      {
        "id": "u4_m19",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int g[4][4] = {{0,1,1,0},{1,0,1,1},{1,1,0,0},{0,1,0,0}};\n    int i, j, deg = 0, total = 0;\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 4; j++) {\n            total += g[i][j];\n            if (i == 1)\n                deg += g[i][j];\n        }\n    }\n    printf(\"%d %d\", deg, total / 2);\n    return 0;\n}",
        "o": [
          "3 4",
          "3 8",
          "4 3",
          "2 4"
        ],
        "a": 0
      },
      {
        "id": "u4_m20",
        "q": "What is the output of the following C code, which runs DFS from vertex 0?",
        "code": "#include <stdio.h>\nint g[5][5] = {{0,1,0,0,1},{1,0,1,0,1},{0,1,0,1,0},{0,0,1,0,1},{1,1,0,1,0}};\nint visited[5];\nvoid dfs(int v) {\n    int i;\n    visited[v] = 1;\n    printf(\"%d \", v);\n    for (i = 0; i < 5; i++) {\n        if (g[v][i] && !visited[i])\n            dfs(i);\n    }\n}\nint main() {\n    dfs(0);\n    return 0;\n}",
        "o": [
          "0 1 2 3 4",
          "0 2 1 3 4",
          "0 1 3 4 2",
          "0 1 2 4 3"
        ],
        "a": 0
      }
    ],
    "debug": [
      {
        "id": "u4_d1",
        "title": "Q1. TOPOLOGICAL SORT",
        "ps": "The courses form a directed acyclic graph (DAG). Debug topoSort() so that it prints the topological order, repeatedly choosing the smallest-numbered course with in-degree 0.",
        "sampleIn": "4 4\n0 1\n0 2\n1 3\n2 3",
        "sampleOut": "Topological Order: 0 1 2 3",
        "header": "#include <stdio.h>\nint adj[15][15];\nvoid addEdge(int a, int b) { adj[a][b] = 1; }",
        "buggy": "void topoSort(int v) {\n    int indeg[15] = {0};\n    int done[15] = {0};\n    for (int i = 0; i < v; i++) {\n        for (int j = 0; j < v; j++) {\n            indeg[i] += adj[j][i];\n        }\n    }\n    printf(\"Topological Order:\");\n    for (int count = 0; count < v; count++) {\n        for (int u = 0; u < v; u++) {\n            if (done[u] == 0 && indeg[u] <= 0) {\n                printf(\" %d\", u);\n                done[u] = 1;\n                break;\n            }\n        }\n    }\n    printf(\"\\n\");\n}",
        "footer": "int main() {\n    int v, e;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        addEdge(a, b);\n    }\n    topoSort(v);\n    return 0;\n}",
        "hidden": [
          {
            "input": "4 4\n0 1\n0 2\n1 3\n2 3\n",
            "expected": "Topological Order: 0 1 2 3"
          },
          {
            "input": "3 2\n2 1\n1 0\n",
            "expected": "Topological Order: 2 1 0"
          },
          {
            "input": "1 0\n",
            "expected": "Topological Order: 0"
          },
          {
            "input": "4 3\n3 2\n2 1\n1 0\n",
            "expected": "Topological Order: 3 2 1 0"
          },
          {
            "input": "5 5\n0 2\n0 3\n1 3\n1 4\n2 4\n",
            "expected": "Topological Order: 0 1 2 3 4"
          },
          {
            "input": "7 8\n0 1\n0 2\n1 3\n2 3\n3 4\n5 4\n5 6\n6 4\n",
            "expected": "Topological Order: 0 1 2 3 5 6 4"
          }
        ],
        "sol": "void topoSort(int v) {\n    int indeg[15] = {0};\n    int done[15] = {0};\n    for (int i = 0; i < v; i++) {\n        for (int j = 0; j < v; j++) {\n            indeg[j] += adj[i][j];\n        }\n    }\n    printf(\"Topological Order:\");\n    for (int count = 0; count < v; count++) {\n        for (int u = 0; u < v; u++) {\n            if (done[u] == 0 && indeg[u] == 0) {\n                printf(\" %d\", u);\n                done[u] = 1;\n                for (int w = 0; w < v; w++) {\n                    indeg[w] -= adj[u][w];\n                }\n                break;\n            }\n        }\n    }\n    printf(\"\\n\");\n}",
        "samples": [
          {
            "input": "4 4\n0 1\n0 2\n1 3\n2 3",
            "expected": "Topological Order: 0 1 2 3"
          },
          {
            "input": "3 2\n2 1\n1 0",
            "expected": "Topological Order: 2 1 0"
          }
        ],
        "hidden_cases": [
          {
            "input": "1 0\n",
            "expected": "Topological Order: 0"
          },
          {
            "input": "4 3\n3 2\n2 1\n1 0\n",
            "expected": "Topological Order: 3 2 1 0"
          },
          {
            "input": "5 5\n0 2\n0 3\n1 3\n1 4\n2 4\n",
            "expected": "Topological Order: 0 1 2 3 4"
          },
          {
            "input": "7 8\n0 1\n0 2\n1 3\n2 3\n3 4\n5 4\n5 6\n6 4\n",
            "expected": "Topological Order: 0 1 2 3 5 6 4"
          }
        ]
      },
      {
        "id": "u4_d2",
        "title": "Q2. UNDIRECTED GRAPH USING ADJACENCY LISTS",
        "ps": "Debug addEdge() and printLists() so that every friendship is stored in both students' adjacency lists and the lists are printed in insertion order.",
        "sampleIn": "3 2\n2 0\n2 1",
        "sampleOut": "0: 2\n1: 2\n2: 0 1",
        "header": "#include <stdio.h>\nint list[15][15];\nint cnt[15];",
        "buggy": "void addEdge(int a, int b) {\n    list[a][cnt[a]++] = b;\n}\nvoid printLists(int v) {\n    for (int i = 0; i < v; i++) {\n        printf(\"%d:\", i);\n        for (int j = 0; j <= cnt[i]; j++) {\n            printf(\" %d\", list[i][j]);\n        }\n        printf(\"\\n\");\n    }\n}",
        "footer": "int main() {\n    int v, e;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        addEdge(a, b);\n    }\n    printLists(v);\n    return 0;\n}",
        "hidden": [
          {
            "input": "3 2\n2 0\n2 1\n",
            "expected": "0: 2\n1: 2\n2: 0 1"
          },
          {
            "input": "4 3\n3 0\n3 1\n0 1\n",
            "expected": "0: 3 1\n1: 3 0\n2:\n3: 0 1"
          },
          {
            "input": "3 0\n",
            "expected": "0:\n1:\n2:"
          },
          {
            "input": "5 4\n4 0\n4 1\n4 2\n4 3\n",
            "expected": "0: 4\n1: 4\n2: 4\n3: 4\n4: 0 1 2 3"
          },
          {
            "input": "6 6\n5 0\n0 3\n3 1\n1 4\n4 2\n2 5\n",
            "expected": "0: 5 3\n1: 3 4\n2: 4 5\n3: 0 1\n4: 1 2\n5: 0 2"
          },
          {
            "input": "5 7\n0 1\n0 4\n1 2\n1 3\n1 4\n2 3\n3 4\n",
            "expected": "0: 1 4\n1: 0 2 3 4\n2: 1 3\n3: 1 2 4\n4: 0 1 3"
          }
        ],
        "sol": "void addEdge(int a, int b) {\n    list[a][cnt[a]++] = b;\n    list[b][cnt[b]++] = a;\n}\nvoid printLists(int v) {\n    for (int i = 0; i < v; i++) {\n        printf(\"%d:\", i);\n        for (int j = 0; j < cnt[i]; j++) {\n            printf(\" %d\", list[i][j]);\n        }\n        printf(\"\\n\");\n    }\n}",
        "samples": [
          {
            "input": "3 2\n2 0\n2 1",
            "expected": "0: 2\n1: 2\n2: 0 1"
          },
          {
            "input": "4 3\n3 0\n3 1\n0 1",
            "expected": "0: 3 1\n1: 3 0\n2:\n3: 0 1"
          }
        ],
        "hidden_cases": [
          {
            "input": "3 0\n",
            "expected": "0:\n1:\n2:"
          },
          {
            "input": "5 4\n4 0\n4 1\n4 2\n4 3\n",
            "expected": "0: 4\n1: 4\n2: 4\n3: 4\n4: 0 1 2 3"
          },
          {
            "input": "6 6\n5 0\n0 3\n3 1\n1 4\n4 2\n2 5\n",
            "expected": "0: 5 3\n1: 3 4\n2: 4 5\n3: 0 1\n4: 1 2\n5: 0 2"
          },
          {
            "input": "5 7\n0 1\n0 4\n1 2\n1 3\n1 4\n2 3\n3 4\n",
            "expected": "0: 1 4\n1: 0 2 3 4\n2: 1 3\n3: 1 2 4\n4: 0 1 3"
          }
        ]
      },
      {
        "id": "u4_d3",
        "title": "Q3. IN-DEGREE AND OUT-DEGREE OF A DIRECTED GRAPH",
        "ps": "Debug printDegrees() to calculate and print the in-degree and out-degree of every vertex in the directed graph.",
        "sampleIn": "3 2\n0 1\n0 2",
        "sampleOut": "Vertex 0: In=0 Out=2\nVertex 1: In=1 Out=0\nVertex 2: In=1 Out=0",
        "header": "#include <stdio.h>\nint adj[15][15];\nvoid addEdge(int a, int b) { adj[a][b] = 1; }",
        "buggy": "void printDegrees(int v) {\n    for (int i = 0; i < v; i++) {\n        int in = 0, out = 0;\n        for (int j = 0; j < v; j++) {\n            out += adj[j][i];\n            in += adj[i][j];\n        }\n        printf(\"Vertex %d: In=%d Out=%d\\n\", i, in, out);\n    }\n}",
        "footer": "int main() {\n    int v, e;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        addEdge(a, b);\n    }\n    printDegrees(v);\n    return 0;\n}",
        "hidden": [
          {
            "input": "3 2\n0 1\n0 2\n",
            "expected": "Vertex 0: In=0 Out=2\nVertex 1: In=1 Out=0\nVertex 2: In=1 Out=0"
          },
          {
            "input": "4 3\n1 0\n2 0\n3 0\n",
            "expected": "Vertex 0: In=3 Out=0\nVertex 1: In=0 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1"
          },
          {
            "input": "3 0\n",
            "expected": "Vertex 0: In=0 Out=0\nVertex 1: In=0 Out=0\nVertex 2: In=0 Out=0"
          },
          {
            "input": "5 5\n1 0\n2 0\n3 0\n4 0\n0 1\n",
            "expected": "Vertex 0: In=4 Out=1\nVertex 1: In=1 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1\nVertex 4: In=0 Out=1"
          },
          {
            "input": "6 7\n0 1\n0 2\n1 3\n2 3\n3 4\n4 5\n5 0\n",
            "expected": "Vertex 0: In=1 Out=2\nVertex 1: In=1 Out=1\nVertex 2: In=1 Out=1\nVertex 3: In=2 Out=1\nVertex 4: In=1 Out=1\nVertex 5: In=1 Out=1"
          },
          {
            "input": "5 6\n0 4\n1 4\n2 4\n3 4\n4 0\n0 1\n",
            "expected": "Vertex 0: In=1 Out=2\nVertex 1: In=1 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1\nVertex 4: In=4 Out=1"
          }
        ],
        "sol": "void printDegrees(int v) {\n    for (int i = 0; i < v; i++) {\n        int in = 0, out = 0;\n        for (int j = 0; j < v; j++) {\n            out += adj[i][j];\n            in += adj[j][i];\n        }\n        printf(\"Vertex %d: In=%d Out=%d\\n\", i, in, out);\n    }\n}",
        "samples": [
          {
            "input": "3 2\n0 1\n0 2",
            "expected": "Vertex 0: In=0 Out=2\nVertex 1: In=1 Out=0\nVertex 2: In=1 Out=0"
          },
          {
            "input": "4 3\n1 0\n2 0\n3 0",
            "expected": "Vertex 0: In=3 Out=0\nVertex 1: In=0 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1"
          }
        ],
        "hidden_cases": [
          {
            "input": "3 0\n",
            "expected": "Vertex 0: In=0 Out=0\nVertex 1: In=0 Out=0\nVertex 2: In=0 Out=0"
          },
          {
            "input": "5 5\n1 0\n2 0\n3 0\n4 0\n0 1\n",
            "expected": "Vertex 0: In=4 Out=1\nVertex 1: In=1 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1\nVertex 4: In=0 Out=1"
          },
          {
            "input": "6 7\n0 1\n0 2\n1 3\n2 3\n3 4\n4 5\n5 0\n",
            "expected": "Vertex 0: In=1 Out=2\nVertex 1: In=1 Out=1\nVertex 2: In=1 Out=1\nVertex 3: In=2 Out=1\nVertex 4: In=1 Out=1\nVertex 5: In=1 Out=1"
          },
          {
            "input": "5 6\n0 4\n1 4\n2 4\n3 4\n4 0\n0 1\n",
            "expected": "Vertex 0: In=1 Out=2\nVertex 1: In=1 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1\nVertex 4: In=4 Out=1"
          }
        ]
      },
      {
        "id": "u4_d4",
        "title": "Q4. MINIMUM SPANNING TREE USING PRIM'S ALGORITHM",
        "ps": "Prim's algorithm starts from vertex 0 and repeatedly adds the cheapest connection to a vertex not yet included. Debug primMST() to return the total weight of the minimum spanning tree.",
        "sampleIn": "4 3\n0 1 1\n1 2 2\n2 3 3",
        "sampleOut": "MST Weight: 6",
        "header": "#include <stdio.h>\nint graph[15][15];\nvoid addEdge(int a, int b, int w) { graph[a][b] = w; graph[b][a] = w; }",
        "buggy": "int primMST(int v) {\n    int key[15];\n    int inMST[15] = {0};\n    for (int i = 0; i < v; i++) key[i] = 1000000;\n    key[0] = 0;\n    int total = 0;\n    for (int count = 0; count < v; count++) {\n        int u = -1;\n        for (int i = 0; i < v; i++) {\n            if (inMST[i] == 0 && (u == -1 || key[i] > key[u])) u = i;\n        }\n        inMST[u] = 1;\n        total += key[u];\n        for (int w = 0; w < v; w++) {\n            if (graph[u][w] > 0 && inMST[w] == 0 && graph[u][w] > key[w]) key[w] = graph[u][w];\n        }\n    }\n    return total;\n}",
        "footer": "int main() {\n    int v, e;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b, w;\n        scanf(\"%d %d %d\", &a, &b, &w);\n        addEdge(a, b, w);\n    }\n    printf(\"MST Weight: %d\\n\", primMST(v));\n    return 0;\n}",
        "hidden": [
          {
            "input": "4 3\n0 1 1\n1 2 2\n2 3 3\n",
            "expected": "MST Weight: 6"
          },
          {
            "input": "3 3\n0 1 7\n1 2 3\n0 2 4\n",
            "expected": "MST Weight: 7"
          },
          {
            "input": "1 0\n",
            "expected": "MST Weight: 0"
          },
          {
            "input": "3 3\n0 1 4\n1 2 6\n0 2 5\n",
            "expected": "MST Weight: 9"
          },
          {
            "input": "6 9\n0 1 4\n0 2 4\n1 2 2\n2 3 3\n2 5 2\n2 4 4\n3 4 3\n5 4 3\n1 5 7\n",
            "expected": "MST Weight: 14"
          },
          {
            "input": "7 11\n0 1 7\n0 3 5\n1 2 8\n1 3 9\n1 4 7\n2 4 5\n3 4 15\n3 5 6\n4 5 8\n4 6 9\n5 6 11\n",
            "expected": "MST Weight: 39"
          }
        ],
        "sol": "int primMST(int v) {\n    int key[15];\n    int inMST[15] = {0};\n    for (int i = 0; i < v; i++) {\n        key[i] = 1000000;\n    }\n    key[0] = 0;\n    int total = 0;\n    for (int count = 0; count < v; count++) {\n        int u = -1;\n        for (int i = 0; i < v; i++) {\n            if (inMST[i] == 0 && (u == -1 || key[i] < key[u])) {\n                u = i;\n            }\n        }\n        inMST[u] = 1;\n        total += key[u];\n        for (int w = 0; w < v; w++) {\n            if (graph[u][w] > 0 && inMST[w] == 0 && graph[u][w] < key[w]) {\n                key[w] = graph[u][w];\n            }\n        }\n    }\n    return total;\n}",
        "samples": [
          {
            "input": "4 3\n0 1 1\n1 2 2\n2 3 3",
            "expected": "MST Weight: 6"
          },
          {
            "input": "3 3\n0 1 7\n1 2 3\n0 2 4",
            "expected": "MST Weight: 7"
          }
        ],
        "hidden_cases": [
          {
            "input": "1 0\n",
            "expected": "MST Weight: 0"
          },
          {
            "input": "3 3\n0 1 4\n1 2 6\n0 2 5\n",
            "expected": "MST Weight: 9"
          },
          {
            "input": "6 9\n0 1 4\n0 2 4\n1 2 2\n2 3 3\n2 5 2\n2 4 4\n3 4 3\n5 4 3\n1 5 7\n",
            "expected": "MST Weight: 14"
          },
          {
            "input": "7 11\n0 1 7\n0 3 5\n1 2 8\n1 3 9\n1 4 7\n2 4 5\n3 4 15\n3 5 6\n4 5 8\n4 6 9\n5 6 11\n",
            "expected": "MST Weight: 39"
          }
        ]
      },
      {
        "id": "u4_d5",
        "title": "Q5. SHORTEST PATH USING DIJKSTRA'S ALGORITHM",
        "ps": "Dijkstra's algorithm finds the shortest distance from a source to every other junction. Debug dijkstra() so that the program prints the shortest distances.",
        "sampleIn": "3 3\n0 1 2\n1 2 2\n0 2 5\n0",
        "sampleOut": "Distance to 0: 0\nDistance to 1: 2\nDistance to 2: 4",
        "header": "#include <stdio.h>\nint graph[15][15];\nvoid addEdge(int a, int b, int w) { graph[a][b] = w; graph[b][a] = w; }",
        "buggy": "void dijkstra(int v, int src) {\n    int dist[15];\n    int visited[15] = {0};\n    for (int i = 0; i < v; i++) dist[i] = 1000000;\n    dist[src] = 0;\n    for (int count = 0; count < v; count++) {\n        int u = -1;\n        for (int i = 0; i < v; i++) {\n            if (visited[i] == 0 && (u == -1 || dist[i] > dist[u])) u = i;\n        }\n        visited[u] = 1;\n        for (int w = 0; w < v; w++) {\n            if (graph[u][w] > 0 && dist[u] + graph[u][w] > dist[w]) dist[w] = dist[u] + graph[u][w];\n        }\n    }\n    for (int i = 0; i < v; i++) printf(\"Distance to %d: %d\\n\", i, dist[i]);\n}",
        "footer": "int main() {\n    int v, e, src;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b, w;\n        scanf(\"%d %d %d\", &a, &b, &w);\n        addEdge(a, b, w);\n    }\n    scanf(\"%d\", &src);\n    dijkstra(v, src);\n    return 0;\n}",
        "hidden": [
          {
            "input": "3 3\n0 1 2\n1 2 2\n0 2 5\n0\n",
            "expected": "Distance to 0: 0\nDistance to 1: 2\nDistance to 2: 4"
          },
          {
            "input": "4 4\n0 1 1\n1 2 1\n2 3 1\n0 3 10\n3\n",
            "expected": "Distance to 0: 3\nDistance to 1: 2\nDistance to 2: 1\nDistance to 3: 0"
          },
          {
            "input": "1 0\n0\n",
            "expected": "Distance to 0: 0"
          },
          {
            "input": "4 3\n0 1 5\n1 2 3\n2 3 2\n0\n",
            "expected": "Distance to 0: 0\nDistance to 1: 5\nDistance to 2: 8\nDistance to 3: 10"
          },
          {
            "input": "6 8\n0 1 7\n0 2 9\n0 5 14\n1 2 10\n1 3 15\n2 3 11\n2 5 2\n3 4 6\n0\n",
            "expected": "Distance to 0: 0\nDistance to 1: 7\nDistance to 2: 9\nDistance to 3: 20\nDistance to 4: 26\nDistance to 5: 11"
          },
          {
            "input": "7 9\n0 1 2\n0 2 6\n1 3 5\n2 3 8\n3 4 10\n3 5 15\n4 5 6\n4 6 2\n5 6 6\n0\n",
            "expected": "Distance to 0: 0\nDistance to 1: 2\nDistance to 2: 6\nDistance to 3: 7\nDistance to 4: 17\nDistance to 5: 22\nDistance to 6: 19"
          }
        ],
        "sol": "void dijkstra(int v, int src) {\n    int dist[15];\n    int visited[15] = {0};\n    for (int i = 0; i < v; i++) {\n        dist[i] = 1000000;\n    }\n    dist[src] = 0;\n    for (int count = 0; count < v - 1; count++) {\n        int u = -1;\n        for (int i = 0; i < v; i++) {\n            if (visited[i] == 0 && (u == -1 || dist[i] < dist[u])) {\n                u = i;\n            }\n        }\n        visited[u] = 1;\n        for (int w = 0; w < v; w++) {\n            if (graph[u][w] > 0 && dist[u] + graph[u][w] < dist[w]) {\n                dist[w] = dist[u] + graph[u][w];\n            }\n        }\n    }\n    for (int i = 0; i < v; i++) {\n        printf(\"Distance to %d: %d\\n\", i, dist[i]);\n    }\n}",
        "samples": [
          {
            "input": "3 3\n0 1 2\n1 2 2\n0 2 5\n0",
            "expected": "Distance to 0: 0\nDistance to 1: 2\nDistance to 2: 4"
          },
          {
            "input": "4 4\n0 1 1\n1 2 1\n2 3 1\n0 3 10\n3",
            "expected": "Distance to 0: 3\nDistance to 1: 2\nDistance to 2: 1\nDistance to 3: 0"
          }
        ],
        "hidden_cases": [
          {
            "input": "1 0\n0\n",
            "expected": "Distance to 0: 0"
          },
          {
            "input": "4 3\n0 1 5\n1 2 3\n2 3 2\n0\n",
            "expected": "Distance to 0: 0\nDistance to 1: 5\nDistance to 2: 8\nDistance to 3: 10"
          },
          {
            "input": "6 8\n0 1 7\n0 2 9\n0 5 14\n1 2 10\n1 3 15\n2 3 11\n2 5 2\n3 4 6\n0\n",
            "expected": "Distance to 0: 0\nDistance to 1: 7\nDistance to 2: 9\nDistance to 3: 20\nDistance to 4: 26\nDistance to 5: 11"
          },
          {
            "input": "7 9\n0 1 2\n0 2 6\n1 3 5\n2 3 8\n3 4 10\n3 5 15\n4 5 6\n4 6 2\n5 6 6\n0\n",
            "expected": "Distance to 0: 0\nDistance to 1: 2\nDistance to 2: 6\nDistance to 3: 7\nDistance to 4: 17\nDistance to 5: 22\nDistance to 6: 19"
          }
        ]
      }
    ],
    "cod": [
      {
        "id": "u4_c1",
        "title": "Q1. BREADTH-FIRST SEARCH (BFS)",
        "ps": "Write a program that performs a breadth-first traversal from a starting vertex using a queue on an undirected graph and prints visited vertices in order. Visit unvisited neighbours in increasing numeric order.",
        "sampleIn": "4 3\n0 1\n0 2\n2 3\n0",
        "sampleOut": "BFS Order: 0 1 2 3",
        "hidden": [
          {
            "input": "4 3\n0 1\n0 2\n2 3\n0\n",
            "expected": "BFS Order: 0 1 2 3"
          },
          {
            "input": "5 4\n1 0\n1 2\n1 3\n3 4\n3\n",
            "expected": "BFS Order: 3 1 4 0 2"
          },
          {
            "input": "5 4\n0 1\n0 2\n1 3\n2 4\n0\n",
            "expected": "BFS Order: 0 1 2 3 4"
          },
          {
            "input": "1 0\n0\n",
            "expected": "BFS Order: 0"
          },
          {
            "input": "6 6\n0 1\n0 2\n1 3\n2 3\n3 4\n4 5\n0\n",
            "expected": "BFS Order: 0 1 2 3 4 5"
          },
          {
            "input": "6 3\n0 1\n2 3\n4 5\n2\n",
            "expected": "BFS Order: 2 3"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int v, e, s;\n    int adj[15][15] = {0};\n    int visited[15] = {0};\n    int queue[15];\n    int front = 0, rear = 0;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        adj[a][b] = 1;\n        adj[b][a] = 1;\n    }\n    scanf(\"%d\", &s);\n    visited[s] = 1;\n    queue[rear++] = s;\n    printf(\"BFS Order:\");\n    while (front < rear) {\n        int u = queue[front++];\n        printf(\" %d\", u);\n        for (int w = 0; w < v; w++) {\n            if (adj[u][w] == 1 && visited[w] == 0) {\n                visited[w] = 1;\n                queue[rear++] = w;\n            }\n        }\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4 3\n0 1\n0 2\n2 3\n0",
            "expected": "BFS Order: 0 1 2 3"
          },
          {
            "input": "5 4\n1 0\n1 2\n1 3\n3 4\n3",
            "expected": "BFS Order: 3 1 4 0 2"
          }
        ],
        "hidden_cases": [
          {
            "input": "5 4\n0 1\n0 2\n1 3\n2 4\n0\n",
            "expected": "BFS Order: 0 1 2 3 4"
          },
          {
            "input": "1 0\n0\n",
            "expected": "BFS Order: 0"
          },
          {
            "input": "6 6\n0 1\n0 2\n1 3\n2 3\n3 4\n4 5\n0\n",
            "expected": "BFS Order: 0 1 2 3 4 5"
          },
          {
            "input": "6 3\n0 1\n2 3\n4 5\n2\n",
            "expected": "BFS Order: 2 3"
          }
        ]
      },
      {
        "id": "u4_c2",
        "title": "Q2. ADJACENCY MATRIX OF AN UNDIRECTED GRAPH",
        "ps": "Write a program that reads the number of vertices and edges and prints the adjacency matrix of the undirected graph.",
        "sampleIn": "3 2\n0 1\n1 2",
        "sampleOut": "0 1 0\n1 0 1\n0 1 0",
        "hidden": [
          {
            "input": "3 2\n0 1\n1 2\n",
            "expected": "0 1 0\n1 0 1\n0 1 0"
          },
          {
            "input": "4 3\n0 3\n1 3\n2 3\n",
            "expected": "0 0 0 1\n0 0 0 1\n0 0 0 1\n1 1 1 0"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n",
            "expected": "0 1 0 0\n1 0 1 0\n0 1 0 1\n0 0 1 0"
          },
          {
            "input": "3 0\n",
            "expected": "0 0 0\n0 0 0\n0 0 0"
          },
          {
            "input": "5 4\n0 1\n0 2\n0 3\n0 4\n",
            "expected": "0 1 1 1 1\n1 0 0 0 0\n1 0 0 0 0\n1 0 0 0 0\n1 0 0 0 0"
          },
          {
            "input": "4 6\n0 1\n0 2\n0 3\n1 2\n1 3\n2 3\n",
            "expected": "0 1 1 1\n1 0 1 1\n1 1 0 1\n1 1 1 0"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int v, e;\n    int adj[15][15] = {0};\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        adj[a][b] = 1;\n        adj[b][a] = 1;\n    }\n    for (int i = 0; i < v; i++) {\n        for (int j = 0; j < v; j++) {\n            if (j > 0) printf(\" \");\n            printf(\"%d\", adj[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "samples": [
          {
            "input": "3 2\n0 1\n1 2",
            "expected": "0 1 0\n1 0 1\n0 1 0"
          },
          {
            "input": "4 3\n0 3\n1 3\n2 3",
            "expected": "0 0 0 1\n0 0 0 1\n0 0 0 1\n1 1 1 0"
          }
        ],
        "hidden_cases": [
          {
            "input": "4 3\n0 1\n1 2\n2 3\n",
            "expected": "0 1 0 0\n1 0 1 0\n0 1 0 1\n0 0 1 0"
          },
          {
            "input": "3 0\n",
            "expected": "0 0 0\n0 0 0\n0 0 0"
          },
          {
            "input": "5 4\n0 1\n0 2\n0 3\n0 4\n",
            "expected": "0 1 1 1 1\n1 0 0 0 0\n1 0 0 0 0\n1 0 0 0 0\n1 0 0 0 0"
          },
          {
            "input": "4 6\n0 1\n0 2\n0 3\n1 2\n1 3\n2 3\n",
            "expected": "0 1 1 1\n1 0 1 1\n1 1 0 1\n1 1 1 0"
          }
        ]
      },
      {
        "id": "u4_c3",
        "title": "Q3. DEPTH-FIRST SEARCH (DFS)",
        "ps": "Write a program that performs a depth-first traversal from a starting junction on a directed graph. Always visit the smallest-numbered unvisited junction first.",
        "sampleIn": "4 4\n0 1\n0 2\n1 3\n2 3\n0",
        "sampleOut": "DFS Order: 0 1 3 2",
        "hidden": [
          {
            "input": "4 4\n0 1\n0 2\n1 3\n2 3\n0\n",
            "expected": "DFS Order: 0 1 3 2"
          },
          {
            "input": "3 2\n2 1\n1 0\n2\n",
            "expected": "DFS Order: 2 1 0"
          },
          {
            "input": "5 5\n0 1\n0 2\n1 3\n2 3\n3 4\n0\n",
            "expected": "DFS Order: 0 1 3 4 2"
          },
          {
            "input": "1 0\n0\n",
            "expected": "DFS Order: 0"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n0\n",
            "expected": "DFS Order: 0 1 2 3"
          },
          {
            "input": "4 3\n1 0\n2 0\n3 0\n1\n",
            "expected": "DFS Order: 1 0"
          }
        ],
        "sol": "#include <stdio.h>\nint v;\nint adj[15][15];\nint visited[15];\nvoid dfs(int u) {\n    visited[u] = 1;\n    printf(\" %d\", u);\n    for (int w = 0; w < v; w++) {\n        if (adj[u][w] == 1 && visited[w] == 0) {\n            dfs(w);\n        }\n    }\n}\nint main() {\n    int e, s;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        adj[a][b] = 1;\n    }\n    scanf(\"%d\", &s);\n    printf(\"DFS Order:\");\n    dfs(s);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4 4\n0 1\n0 2\n1 3\n2 3\n0",
            "expected": "DFS Order: 0 1 3 2"
          },
          {
            "input": "3 2\n2 1\n1 0\n2",
            "expected": "DFS Order: 2 1 0"
          }
        ],
        "hidden_cases": [
          {
            "input": "5 5\n0 1\n0 2\n1 3\n2 3\n3 4\n0\n",
            "expected": "DFS Order: 0 1 3 4 2"
          },
          {
            "input": "1 0\n0\n",
            "expected": "DFS Order: 0"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n0\n",
            "expected": "DFS Order: 0 1 2 3"
          },
          {
            "input": "4 3\n1 0\n2 0\n3 0\n1\n",
            "expected": "DFS Order: 1 0"
          }
        ]
      },
      {
        "id": "u4_c4",
        "title": "Q4. CHECK WHETHER AN EULER CIRCUIT EXISTS",
        "ps": "A connected undirected graph has an Euler circuit if and only if every vertex has an even degree. Print 'Euler Circuit Exists' or 'Euler Circuit Does Not Exist'.",
        "sampleIn": "4 4\n0 1\n1 2\n2 3\n3 0",
        "sampleOut": "Euler Circuit Exists",
        "hidden": [
          {
            "input": "4 4\n0 1\n1 2\n2 3\n3 0\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "3 2\n0 1\n1 2\n",
            "expected": "Euler Circuit Does Not Exist"
          },
          {
            "input": "3 3\n0 1\n1 2\n2 0\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n",
            "expected": "Euler Circuit Does Not Exist"
          },
          {
            "input": "5 6\n0 1\n1 2\n2 0\n2 3\n3 4\n4 2\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "4 6\n0 1\n0 2\n0 3\n1 2\n1 3\n2 3\n",
            "expected": "Euler Circuit Does Not Exist"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int v, e;\n    int deg[15] = {0};\n    int allEven = 1;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        deg[a]++;\n        deg[b]++;\n    }\n    for (int i = 0; i < v; i++) {\n        if (deg[i] % 2 != 0) allEven = 0;\n    }\n    if (allEven) printf(\"Euler Circuit Exists\\n\");\n    else printf(\"Euler Circuit Does Not Exist\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4 4\n0 1\n1 2\n2 3\n3 0",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "3 2\n0 1\n1 2",
            "expected": "Euler Circuit Does Not Exist"
          }
        ],
        "hidden_cases": [
          {
            "input": "3 3\n0 1\n1 2\n2 0\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n",
            "expected": "Euler Circuit Does Not Exist"
          },
          {
            "input": "5 6\n0 1\n1 2\n2 0\n2 3\n3 4\n4 2\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "4 6\n0 1\n0 2\n0 3\n1 2\n1 3\n2 3\n",
            "expected": "Euler Circuit Does Not Exist"
          }
        ]
      }
    ]
  },
  "u5": {
    "name": "Unit 5: Searching, Sorting & Hashing",
    "mcq": [
      {
        "id": "u5_m1",
        "q": "What does bubble sort do repeatedly in each pass?",
        "o": [
          "Selects the smallest element and moves it to the front",
          "Splits the array into two halves",
          "Inserts each element into a sorted portion",
          "Compares adjacent elements and swaps them if they are in the wrong order"
        ],
        "a": 3
      },
      {
        "id": "u5_m2",
        "q": "What does a hash function do in a hash table?",
        "o": [
          "Sorts the keys in ascending order",
          "Maps a key to an index in the table",
          "Encrypts the key with a secret password",
          "Counts the number of keys in the table"
        ],
        "a": 1
      },
      {
        "id": "u5_m3",
        "q": "What is done in each pass of selection sort?",
        "o": [
          "Adjacent elements are swapped until the array is sorted",
          "The minimum element of the unsorted part is placed at its correct position",
          "A pivot is chosen to partition the array",
          "The array is divided and the halves are merged"
        ],
        "a": 1
      },
      {
        "id": "u5_m4",
        "q": "What is the main idea of Shellsort?",
        "o": [
          "It always picks the last element as a pivot",
          "It merges two sorted halves of the array",
          "It sorts elements that are a gap apart and reduces the gap in each pass",
          "It repeatedly selects the maximum element"
        ],
        "a": 2
      },
      {
        "id": "u5_m5",
        "q": "When does quick sort take O(n\u00b2) time if the first element is always chosen as the pivot?",
        "o": [
          "When the array is in random order",
          "When the array has fewer than ten elements",
          "When the array has an even number of elements",
          "When the array is already sorted"
        ],
        "a": 3
      },
      {
        "id": "u5_m6",
        "q": "What is the worst-case time complexity of linear search on an array of n elements?",
        "o": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n\u00b2)"
        ],
        "a": 1
      },
      {
        "id": "u5_m7",
        "q": "Which condition must be satisfied before applying binary search on an array?",
        "o": [
          "The array must contain only positive numbers",
          "The array must have an even number of elements",
          "The array must be sorted",
          "The array must be stored in a linked list"
        ],
        "a": 2
      },
      {
        "id": "u5_m8",
        "q": "What is the best-case time complexity of insertion sort, which occurs when the array is already sorted?",
        "o": [
          "O(n)",
          "O(n\u00b2)",
          "O(log n)",
          "O(n log n)"
        ],
        "a": 0
      },
      {
        "id": "u5_m9",
        "q": "What is the worst-case time complexity of binary search on a sorted array of n elements?",
        "o": [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(1)"
        ],
        "a": 0
      },
      {
        "id": "u5_m10",
        "q": "What is the time complexity of merge sort in the best, average and worst cases?",
        "o": [
          "O(n log n)",
          "O(n\u00b2)",
          "O(log n)",
          "O(n)"
        ],
        "a": 0
      },
      {
        "id": "u5_m11",
        "q": "In extendible hashing, how is the bucket for a key located?",
        "o": [
          "By scanning every bucket in order",
          "By using the leading bits of the hash value to index a directory of bucket pointers",
          "By following a linked list from the head of the table",
          "By performing a binary search on the keys"
        ],
        "a": 1
      },
      {
        "id": "u5_m12",
        "q": "How does separate chaining resolve collisions?",
        "o": [
          "By searching for the next empty slot in the table",
          "By doubling the table size immediately",
          "By discarding the new key",
          "By keeping all keys that hash to the same index in a linked list"
        ],
        "a": 3
      },
      {
        "id": "u5_m13",
        "q": "What is a collision in hashing?",
        "o": [
          "A key that is not found in the table",
          "A table that has become completely empty",
          "Two different keys mapping to the same index",
          "A key that is deleted from the table"
        ],
        "a": 2
      },
      {
        "id": "u5_m14",
        "q": "How does open addressing resolve a collision?",
        "o": [
          "By probing for another free slot inside the table",
          "By storing the keys in linked lists outside the table",
          "By splitting a bucket and doubling a directory",
          "By sorting the colliding keys"
        ],
        "a": 0
      },
      {
        "id": "u5_m15",
        "q": "What is rehashing?",
        "o": [
          "Applying the hash function twice to every key",
          "Deleting all keys that collide",
          "Building a larger table and reinserting every key using the new table size",
          "Replacing the hash function with a sorting algorithm"
        ],
        "a": 2
      },
      {
        "id": "u5_m16",
        "q": "What is the output of the following C code, which prints the position of the key and the number of iterations taken?",
        "code": "#include <stdio.h>\nint main() {\n    int a[7] = {2, 5, 8, 12, 16, 23, 38};\n    int low = 0, high = 6, mid, key = 23, steps = 0, pos = -1;\n    while (low <= high) {\n        mid = (low + high) / 2;\n        steps++;\n        if (a[mid] == key) {\n            pos = mid;\n            break;\n        } else if (a[mid] < key)\n            low = mid + 1;\n        else\n            high = mid - 1;\n    }\n    printf(\"%d %d\", pos, steps);\n    return 0;\n}",
        "o": [
          "5 3",
          "3 2",
          "5 2",
          "6 2"
        ],
        "a": 0
      },
      {
        "id": "u5_m17",
        "q": "What is the output of the following C code, which performs one pass of bubble sort?",
        "code": "#include <stdio.h>\nint main() {\n    int a[5] = {5, 1, 4, 2, 8};\n    int i, t;\n    for (i = 0; i < 4; i++) {\n        if (a[i] > a[i + 1]) {\n            t = a[i];\n            a[i] = a[i + 1];\n            a[i + 1] = t;\n        }\n    }\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", a[i]);\n    return 0;\n}",
        "o": [
          "1 2 4 5 8",
          "1 4 2 5 8",
          "5 1 4 2 8",
          "1 4 5 2 8"
        ],
        "a": 1
      },
      {
        "id": "u5_m18",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int a[5] = {4, 8, 15, 16, 23};\n    int key = 16, i, pos = -1;\n    for (i = 0; i < 5; i++) {\n        if (a[i] == key) {\n            pos = i;\n            break;\n        }\n    }\n    printf(\"%d %d\", pos, i + 1);\n    return 0;\n}",
        "o": [
          "4 3",
          "3 3",
          "4 4",
          "3 4"
        ],
        "a": 3
      },
      {
        "id": "u5_m19",
        "q": "What is the output of the following C code, which performs the first two passes of selection sort?",
        "code": "#include <stdio.h>\nint main() {\n    int a[5] = {64, 25, 12, 22, 11};\n    int i, j, min, t;\n    for (i = 0; i < 2; i++) {\n        min = i;\n        for (j = i + 1; j < 5; j++)\n            if (a[j] < a[min])\n                min = j;\n        t = a[i];\n        a[i] = a[min];\n        a[min] = t;\n    }\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", a[i]);\n    return 0;\n}",
        "o": [
          "11 12 22 25 64",
          "11 25 12 22 64",
          "12 25 64 22 11",
          "11 12 25 22 64"
        ],
        "a": 0
      },
      {
        "id": "u5_m20",
        "q": "What is the output of the following C code, which inserts keys into a hash table using linear probing?",
        "code": "#include <stdio.h>\nint main() {\n    int t[5], keys[3] = {12, 22, 7};\n    int i, idx;\n    for (i = 0; i < 5; i++)\n        t[i] = -1;\n    for (i = 0; i < 3; i++) {\n        idx = keys[i] % 5;\n        while (t[idx] != -1)\n            idx = (idx + 1) % 5;\n        t[idx] = keys[i];\n    }\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", t[i]);\n    return 0;\n}",
        "o": [
          "-1 -1 12 22 7",
          "12 22 7 -1 -1",
          "-1 -1 12 7 22",
          "7 -1 12 22 -1"
        ],
        "a": 2
      }
    ],
    "debug": [
      {
        "id": "u5_d1",
        "title": "Q1. MERGE TWO SORTED ARRAYS",
        "ps": "Sneha has the sorted attendance lists of two batches and wants a single sorted list. The function mergeArrays() in the editable area is meant to merge two arrays and return the total count. Debug the code so that the program prints the expected output.",
        "sampleIn": "2\n1 9\n3\n2 3 4",
        "sampleOut": "Merged Array: 1 2 3 4 9",
        "header": "#include <stdio.h>\nvoid printArray(int a[], int n) {\n    printf(\"Merged Array:\");\n    for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n    printf(\"\\n\");\n}",
        "buggy": "int mergeArrays(int a[], int n1, int b[], int n2, int c[]) {\n    int i = 0, j = 0, k = 0;\n    while (i < n1 && j < n2) {\n        if (a[i] < b[j]) {\n            c[k] = a[i];\n            i++;\n        } else {\n            c[k] = b[j];\n            j++;\n        }\n    }\n    while (i < n1) c[k++] = a[i++];\n    while (j < n2) c[k++] = b[j++];\n    return k;\n}",
        "footer": "int main() {\n    int n1, n2;\n    int a[105], b[105], c[205];\n    scanf(\"%d\", &n1);\n    for (int i = 0; i < n1; i++) scanf(\"%d\", &a[i]);\n    scanf(\"%d\", &n2);\n    for (int i = 0; i < n2; i++) scanf(\"%d\", &b[i]);\n    int total = mergeArrays(a, n1, b, n2, c);\n    printArray(c, total);\n    return 0;\n}",
        "hidden": [
          {
            "input": "2\n1 9\n3\n2 3 4\n",
            "expected": "Merged Array: 1 2 3 4 9"
          },
          {
            "input": "3\n4 5 6\n2\n1 2\n",
            "expected": "Merged Array: 1 2 4 5 6"
          },
          {
            "input": "1\n5\n1\n3\n",
            "expected": "Merged Array: 3 5"
          },
          {
            "input": "2\n5 6\n4\n1 2 3 4\n",
            "expected": "Merged Array: 1 2 3 4 5 6"
          },
          {
            "input": "5\n2 4 6 8 10\n3\n1 3 5\n",
            "expected": "Merged Array: 1 2 3 4 5 6 8 10"
          },
          {
            "input": "3\n1 2 3\n3\n7 8 9\n",
            "expected": "Merged Array: 1 2 3 7 8 9"
          }
        ],
        "sol": "int mergeArrays(int a[], int n1, int b[], int n2, int c[]) {\n    int i = 0, j = 0, k = 0;\n    while (i < n1 && j < n2) {\n        if (a[i] <= b[j]) {\n            c[k] = a[i];\n            i++;\n        } else {\n            c[k] = b[j];\n            j++;\n        }\n        k++;\n    }\n    while (i < n1) {\n        c[k] = a[i];\n        i++;\n        k++;\n    }\n    while (j < n2) {\n        c[k] = b[j];\n        j++;\n        k++;\n    }\n    return k;\n}",
        "samples": [
          {
            "input": "2\n1 9\n3\n2 3 4",
            "expected": "Merged Array: 1 2 3 4 9"
          },
          {
            "input": "3\n4 5 6\n2\n1 2",
            "expected": "Merged Array: 1 2 4 5 6"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n5\n1\n3\n",
            "expected": "Merged Array: 3 5"
          },
          {
            "input": "2\n5 6\n4\n1 2 3 4\n",
            "expected": "Merged Array: 1 2 3 4 5 6"
          },
          {
            "input": "5\n2 4 6 8 10\n3\n1 3 5\n",
            "expected": "Merged Array: 1 2 3 4 5 6 8 10"
          },
          {
            "input": "3\n1 2 3\n3\n7 8 9\n",
            "expected": "Merged Array: 1 2 3 7 8 9"
          }
        ]
      },
      {
        "id": "u5_d2",
        "title": "Q2. SELECTION SORT",
        "ps": "Anitha wants to arrange marks in ascending order using selection sort. In every pass, the smallest element of the unsorted part is found and swapped to the front. Debug selectionSort() so that the program prints the expected output.",
        "sampleIn": "5\n7 3 9 1 5",
        "sampleOut": "Sorted Array: 1 3 5 7 9",
        "header": "#include <stdio.h>\nvoid printArray(int a[], int n) {\n    printf(\"Sorted Array:\");\n    for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n    printf(\"\\n\");\n}",
        "buggy": "void selectionSort(int a[], int n) {\n    for (int i = 0; i < n; i++) {\n        int minIndex = i;\n        for (int j = i + 1; j < n; j++) {\n            if (a[j] > a[minIndex]) minIndex = j;\n        }\n        int temp = a[i];\n        a[i] = a[minIndex];\n        a[minIndex] = temp;\n    }\n}",
        "footer": "int main() {\n    int n;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    selectionSort(a, n);\n    printArray(a, n);\n    return 0;\n}",
        "hidden": [
          {
            "input": "5\n7 3 9 1 5\n",
            "expected": "Sorted Array: 1 3 5 7 9"
          },
          {
            "input": "3\n2 2 1\n",
            "expected": "Sorted Array: 1 2 2"
          },
          {
            "input": "1\n3\n",
            "expected": "Sorted Array: 3"
          },
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Sorted Array: 1 2 3 4"
          },
          {
            "input": "7\n29 10 14 37 13 5 20\n",
            "expected": "Sorted Array: 5 10 13 14 20 29 37"
          },
          {
            "input": "8\n8 -7 6 -5 4 -3 2 -1\n",
            "expected": "Sorted Array: -7 -5 -3 -1 2 4 6 8"
          }
        ],
        "sol": "void selectionSort(int a[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int minIndex = i;\n        for (int j = i + 1; j < n; j++) {\n            if (a[j] < a[minIndex]) {\n                minIndex = j;\n            }\n        }\n        int temp = a[i];\n        a[i] = a[minIndex];\n        a[minIndex] = temp;\n    }\n}",
        "samples": [
          {
            "input": "5\n7 3 9 1 5",
            "expected": "Sorted Array: 1 3 5 7 9"
          },
          {
            "input": "3\n2 2 1",
            "expected": "Sorted Array: 1 2 2"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n3\n",
            "expected": "Sorted Array: 3"
          },
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Sorted Array: 1 2 3 4"
          },
          {
            "input": "7\n29 10 14 37 13 5 20\n",
            "expected": "Sorted Array: 5 10 13 14 20 29 37"
          },
          {
            "input": "8\n8 -7 6 -5 4 -3 2 -1\n",
            "expected": "Sorted Array: -7 -5 -3 -1 2 4 6 8"
          }
        ]
      },
      {
        "id": "u5_d3",
        "title": "Q3. LINEAR SEARCH WITH COMPARISON COUNT",
        "ps": "Mohan searches for a student's registration number in an unsorted list and counts comparisons. Debug linearSearch() so that the program prints 'Found at index X after Y comparisons' or 'Not Found after Y comparisons'.",
        "sampleIn": "3\n15 25 35\n25",
        "sampleOut": "Found at index 1 after 2 comparisons",
        "header": "#include <stdio.h>",
        "buggy": "void linearSearch(int a[], int n, int key) {\n    int comparisons = 0;\n    for (int i = 0; i < n; i++) {\n        if (a[i] == key) {\n            printf(\"Found at index %d after %d comparisons\\n\", i, comparisons);\n            return;\n        }\n        comparisons++;\n    }\n    printf(\"Not Found after %d comparisons\\n\", comparisons);\n}",
        "footer": "int main() {\n    int n, key;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    scanf(\"%d\", &key);\n    linearSearch(a, n, key);\n    return 0;\n}",
        "hidden": [
          {
            "input": "3\n15 25 35\n25\n",
            "expected": "Found at index 1 after 2 comparisons"
          },
          {
            "input": "4\n2 4 6 8\n5\n",
            "expected": "Not Found after 4 comparisons"
          },
          {
            "input": "1\n7\n7\n",
            "expected": "Found at index 0 after 1 comparisons"
          },
          {
            "input": "6\n9 3 9 5 9 1\n9\n",
            "expected": "Found at index 0 after 1 comparisons"
          },
          {
            "input": "4\n51 62 73 84\n95\n",
            "expected": "Not Found after 4 comparisons"
          },
          {
            "input": "8\n101 202 303 404 505 606 707 808\n808\n",
            "expected": "Found at index 7 after 8 comparisons"
          }
        ],
        "sol": "void linearSearch(int a[], int n, int key) {\n    int comparisons = 0;\n    for (int i = 0; i < n; i++) {\n        comparisons++;\n        if (a[i] == key) {\n            printf(\"Found at index %d after %d comparisons\\n\", i, comparisons);\n            return;\n        }\n    }\n    printf(\"Not Found after %d comparisons\\n\", comparisons);\n}",
        "samples": [
          {
            "input": "3\n15 25 35\n25",
            "expected": "Found at index 1 after 2 comparisons"
          },
          {
            "input": "4\n2 4 6 8\n5",
            "expected": "Not Found after 4 comparisons"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n7\n7\n",
            "expected": "Found at index 0 after 1 comparisons"
          },
          {
            "input": "6\n9 3 9 5 9 1\n9\n",
            "expected": "Found at index 0 after 1 comparisons"
          },
          {
            "input": "4\n51 62 73 84\n95\n",
            "expected": "Not Found after 4 comparisons"
          },
          {
            "input": "8\n101 202 303 404 505 606 707 808\n808\n",
            "expected": "Found at index 7 after 8 comparisons"
          }
        ]
      },
      {
        "id": "u5_d4",
        "title": "Q4. SHELL SORT",
        "ps": "Rakesh sorts prices using Shell sort with gap starting at n/2 and halving. Debug shellSort() so that the program prints the expected sorted array.",
        "sampleIn": "4\n40 30 20 10",
        "sampleOut": "Sorted Array: 10 20 30 40",
        "header": "#include <stdio.h>\nvoid printArray(int a[], int n) {\n    printf(\"Sorted Array:\");\n    for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n    printf(\"\\n\");\n}",
        "buggy": "void shellSort(int a[], int n) {\n    for (int gap = n / 2; gap > 0; gap /= 2) {\n        for (int i = gap; i < n; i++) {\n            int temp = a[i];\n            int j = i;\n            while (j > gap && a[j - gap] > temp) {\n                a[j] = a[j - gap];\n                j += gap;\n            }\n            a[j] = temp;\n        }\n    }\n}",
        "footer": "int main() {\n    int n;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    shellSort(a, n);\n    printArray(a, n);\n    return 0;\n}",
        "hidden": [
          {
            "input": "4\n40 30 20 10\n",
            "expected": "Sorted Array: 10 20 30 40"
          },
          {
            "input": "6\n6 1 5 2 4 3\n",
            "expected": "Sorted Array: 1 2 3 4 5 6"
          },
          {
            "input": "1\n5\n",
            "expected": "Sorted Array: 5"
          },
          {
            "input": "5\n9 8 7 6 5\n",
            "expected": "Sorted Array: 5 6 7 8 9"
          },
          {
            "input": "7\n12 34 54 2 3 10 1\n",
            "expected": "Sorted Array: 1 2 3 10 12 34 54"
          },
          {
            "input": "6\n-2 4 0 -5 9 1\n",
            "expected": "Sorted Array: -5 -2 0 1 4 9"
          }
        ],
        "sol": "void shellSort(int a[], int n) {\n    for (int gap = n / 2; gap > 0; gap /= 2) {\n        for (int i = gap; i < n; i++) {\n            int temp = a[i];\n            int j = i;\n            while (j >= gap && a[j - gap] > temp) {\n                a[j] = a[j - gap];\n                j -= gap;\n            }\n            a[j] = temp;\n        }\n    }\n}",
        "samples": [
          {
            "input": "4\n40 30 20 10",
            "expected": "Sorted Array: 10 20 30 40"
          },
          {
            "input": "6\n6 1 5 2 4 3",
            "expected": "Sorted Array: 1 2 3 4 5 6"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n5\n",
            "expected": "Sorted Array: 5"
          },
          {
            "input": "5\n9 8 7 6 5\n",
            "expected": "Sorted Array: 5 6 7 8 9"
          },
          {
            "input": "7\n12 34 54 2 3 10 1\n",
            "expected": "Sorted Array: 1 2 3 10 12 34 54"
          },
          {
            "input": "6\n-2 4 0 -5 9 1\n",
            "expected": "Sorted Array: -5 -2 0 1 4 9"
          }
        ]
      },
      {
        "id": "u5_d5",
        "title": "Q5. HASH TABLE WITH SEPARATE CHAINING",
        "ps": "Vimala maintains a hash table of m buckets using separate chaining (collision list per bucket). Debug insertKey() and printTable() so that the program prints each bucket's keys.",
        "sampleIn": "3 4\n10 20 30 40",
        "sampleOut": "Bucket 0: 30\nBucket 1: 10 40\nBucket 2: 20",
        "header": "#include <stdio.h>\nint table[15][105];\nint cnt[15];",
        "buggy": "void insertKey(int m, int key) {\n    int idx = key % m;\n    cnt[idx]++;\n    table[idx][cnt[idx]] = key;\n}\nvoid printTable(int m) {\n    for (int i = 0; i < m; i++) {\n        printf(\"Bucket %d:\", i);\n        if (cnt[i] == 0) printf(\" Empty\");\n        for (int j = 0; j <= cnt[i]; j++) printf(\" %d\", table[i][j]);\n        printf(\"\\n\");\n    }\n}",
        "footer": "int main() {\n    int m, n;\n    scanf(\"%d %d\", &m, &n);\n    for (int i = 0; i < n; i++) {\n        int key;\n        scanf(\"%d\", &key);\n        insertKey(m, key);\n    }\n    printTable(m);\n    return 0;\n}",
        "hidden": [
          {
            "input": "3 4\n10 20 30 40\n",
            "expected": "Bucket 0: 30\nBucket 1: 10 40\nBucket 2: 20"
          },
          {
            "input": "5 3\n7 12 3\n",
            "expected": "Bucket 0: Empty\nBucket 1: Empty\nBucket 2: 7 12\nBucket 3: 3\nBucket 4: Empty"
          },
          {
            "input": "4 4\n4 8 12 16\n",
            "expected": "Bucket 0: 4 8 12 16\nBucket 1: Empty\nBucket 2: Empty\nBucket 3: Empty"
          },
          {
            "input": "2 3\n1 2 3\n",
            "expected": "Bucket 0: 2\nBucket 1: 1 3"
          },
          {
            "input": "6 5\n10 15 20 25 30\n",
            "expected": "Bucket 0: 30\nBucket 1: 25\nBucket 2: 20\nBucket 3: 15\nBucket 4: 10\nBucket 5: Empty"
          },
          {
            "input": "3 0\n",
            "expected": "Bucket 0: Empty\nBucket 1: Empty\nBucket 2: Empty"
          }
        ],
        "sol": "void insertKey(int m, int key) {\n    int idx = key % m;\n    table[idx][cnt[idx]] = key;\n    cnt[idx]++;\n}\nvoid printTable(int m) {\n    for (int i = 0; i < m; i++) {\n        printf(\"Bucket %d:\", i);\n        if (cnt[i] == 0) {\n            printf(\" Empty\");\n        }\n        for (int j = 0; j < cnt[i]; j++) {\n            printf(\" %d\", table[i][j]);\n        }\n        printf(\"\\n\");\n    }\n}",
        "samples": [
          {
            "input": "3 4\n10 20 30 40",
            "expected": "Bucket 0: 30\nBucket 1: 10 40\nBucket 2: 20"
          },
          {
            "input": "5 3\n7 12 3",
            "expected": "Bucket 0: Empty\nBucket 1: Empty\nBucket 2: 7 12\nBucket 3: 3\nBucket 4: Empty"
          }
        ],
        "hidden_cases": [
          {
            "input": "4 4\n4 8 12 16\n",
            "expected": "Bucket 0: 4 8 12 16\nBucket 1: Empty\nBucket 2: Empty\nBucket 3: Empty"
          },
          {
            "input": "2 3\n1 2 3\n",
            "expected": "Bucket 0: 2\nBucket 1: 1 3"
          },
          {
            "input": "6 5\n10 15 20 25 30\n",
            "expected": "Bucket 0: 30\nBucket 1: 25\nBucket 2: 20\nBucket 3: 15\nBucket 4: 10\nBucket 5: Empty"
          },
          {
            "input": "3 0\n",
            "expected": "Bucket 0: Empty\nBucket 1: Empty\nBucket 2: Empty"
          }
        ]
      }
    ],
    "cod": [
      {
        "id": "u5_c1",
        "title": "Q1. BINARY SEARCH ON SORTED ARRAY",
        "ps": "Write a program that reads sorted roll numbers and a key, and finds the index of the key using binary search. If key is present, print 'Found at index X'. If not present, print 'Not Found'.",
        "sampleIn": "5\n3 6 9 12 15\n12",
        "sampleOut": "Found at index 3",
        "hidden": [
          {
            "input": "5\n3 6 9 12 15\n12\n",
            "expected": "Found at index 3"
          },
          {
            "input": "4\n10 20 30 40\n25\n",
            "expected": "Not Found"
          },
          {
            "input": "1\n5\n5\n",
            "expected": "Found at index 0"
          },
          {
            "input": "6\n2 4 6 8 10 12\n2\n",
            "expected": "Found at index 0"
          },
          {
            "input": "6\n2 4 6 8 10 12\n12\n",
            "expected": "Found at index 5"
          },
          {
            "input": "7\n1 3 5 7 9 11 13\n8\n",
            "expected": "Not Found"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n, key;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    scanf(\"%d\", &key);\n    int low = 0, high = n - 1, found = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (a[mid] == key) {\n            found = mid;\n            break;\n        } else if (a[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    if (found == -1) printf(\"Not Found\\n\");\n    else printf(\"Found at index %d\\n\", found);\n    return 0;\n}",
        "samples": [
          {
            "input": "5\n3 6 9 12 15\n12",
            "expected": "Found at index 3"
          },
          {
            "input": "4\n10 20 30 40\n25",
            "expected": "Not Found"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n5\n5\n",
            "expected": "Found at index 0"
          },
          {
            "input": "6\n2 4 6 8 10 12\n2\n",
            "expected": "Found at index 0"
          },
          {
            "input": "6\n2 4 6 8 10 12\n12\n",
            "expected": "Found at index 5"
          },
          {
            "input": "7\n1 3 5 7 9 11 13\n8\n",
            "expected": "Not Found"
          }
        ]
      },
      {
        "id": "u5_c2",
        "title": "Q2. BUBBLE SORT WITH SWAP COUNT",
        "ps": "Write a program that sorts marks in ascending order using bubble sort, counts the total number of swaps performed, and prints the count along with the sorted marks.",
        "sampleIn": "5\n3 2 5 1 4",
        "sampleOut": "Total Swaps: 5\nSorted Array: 1 2 3 4 5",
        "hidden": [
          {
            "input": "5\n3 2 5 1 4\n",
            "expected": "Total Swaps: 5\nSorted Array: 1 2 3 4 5"
          },
          {
            "input": "3\n9 7 8\n",
            "expected": "Total Swaps: 2\nSorted Array: 7 8 9"
          },
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Total Swaps: 0\nSorted Array: 1 2 3 4"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Total Swaps: 6\nSorted Array: 1 2 3 4"
          },
          {
            "input": "1\n10\n",
            "expected": "Total Swaps: 0\nSorted Array: 10"
          },
          {
            "input": "6\n5 1 4 2 8 3\n",
            "expected": "Total Swaps: 7\nSorted Array: 1 2 3 4 5 8"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n;\n    int a[105];\n    int swaps = 0;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (a[j] > a[j + 1]) {\n                int temp = a[j];\n                a[j] = a[j + 1];\n                a[j + 1] = temp;\n                swaps++;\n            }\n        }\n    }\n    printf(\"Total Swaps: %d\\n\", swaps);\n    printf(\"Sorted Array:\");\n    for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "5\n3 2 5 1 4",
            "expected": "Total Swaps: 5\nSorted Array: 1 2 3 4 5"
          },
          {
            "input": "3\n9 7 8",
            "expected": "Total Swaps: 2\nSorted Array: 7 8 9"
          }
        ],
        "hidden_cases": [
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Total Swaps: 0\nSorted Array: 1 2 3 4"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Total Swaps: 6\nSorted Array: 1 2 3 4"
          },
          {
            "input": "1\n10\n",
            "expected": "Total Swaps: 0\nSorted Array: 10"
          },
          {
            "input": "6\n5 1 4 2 8 3\n",
            "expected": "Total Swaps: 7\nSorted Array: 1 2 3 4 5 8"
          }
        ]
      },
      {
        "id": "u5_c3",
        "title": "Q3. QUICK SORT SINGLE PARTITION STEP",
        "ps": "Write a program that performs a single partition step using the last element as the pivot. Print the final index of the pivot and the rearranged array.",
        "sampleIn": "5\n7 2 9 4 5",
        "sampleOut": "Pivot Index: 2\nArray After Partition: 2 4 5 7 9",
        "hidden": [
          {
            "input": "5\n7 2 9 4 5\n",
            "expected": "Pivot Index: 2\nArray After Partition: 2 4 5 7 9"
          },
          {
            "input": "4\n3 8 1 6\n",
            "expected": "Pivot Index: 2\nArray After Partition: 3 1 6 8"
          },
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Pivot Index: 3\nArray After Partition: 1 2 3 4"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Pivot Index: 0\nArray After Partition: 1 3 2 4"
          },
          {
            "input": "1\n5\n",
            "expected": "Pivot Index: 0\nArray After Partition: 5"
          },
          {
            "input": "6\n9 7 5 11 12 2\n",
            "expected": "Pivot Index: 0\nArray After Partition: 2 7 5 11 12 9"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    int pivot = a[n - 1];\n    int i = -1;\n    for (int j = 0; j < n - 1; j++) {\n        if (a[j] <= pivot) {\n            i++;\n            int temp = a[i];\n            a[i] = a[j];\n            a[j] = temp;\n        }\n    }\n    int temp = a[i + 1];\n    a[i + 1] = a[n - 1];\n    a[n - 1] = temp;\n    printf(\"Pivot Index: %d\\n\", i + 1);\n    printf(\"Array After Partition:\");\n    for (int k = 0; k < n; k++) printf(\" %d\", a[k]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "5\n7 2 9 4 5",
            "expected": "Pivot Index: 2\nArray After Partition: 2 4 5 7 9"
          },
          {
            "input": "4\n3 8 1 6",
            "expected": "Pivot Index: 2\nArray After Partition: 3 1 6 8"
          }
        ],
        "hidden_cases": [
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Pivot Index: 3\nArray After Partition: 1 2 3 4"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Pivot Index: 0\nArray After Partition: 1 3 2 4"
          },
          {
            "input": "1\n5\n",
            "expected": "Pivot Index: 0\nArray After Partition: 5"
          },
          {
            "input": "6\n9 7 5 11 12 2\n",
            "expected": "Pivot Index: 0\nArray After Partition: 2 7 5 11 12 9"
          }
        ]
      },
      {
        "id": "u5_c4",
        "title": "Q4. HASH TABLE WITH LINEAR PROBING",
        "ps": "The table has m slots (0 to m-1) initialized to -1. The hash function is k mod m. Resolve collisions using linear probing. Print the final hash table.",
        "sampleIn": "10 4\n21 31 41 11",
        "sampleOut": "Hash Table: -1 21 31 41 11 -1 -1 -1 -1 -1",
        "hidden": [
          {
            "input": "10 4\n21 31 41 11\n",
            "expected": "Hash Table: -1 21 31 41 11 -1 -1 -1 -1 -1"
          },
          {
            "input": "5 3\n7 12 3\n",
            "expected": "Hash Table: -1 -1 7 12 3"
          },
          {
            "input": "5 5\n0 5 10 15 20\n",
            "expected": "Hash Table: 0 5 10 15 20"
          },
          {
            "input": "4 2\n3 7\n",
            "expected": "Hash Table: 7 -1 -1 3"
          },
          {
            "input": "6 3\n1 7 13\n",
            "expected": "Hash Table: -1 1 7 13 -1 -1"
          },
          {
            "input": "3 1\n5\n",
            "expected": "Hash Table: -1 -1 5"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int m, n;\n    int table[105];\n    scanf(\"%d %d\", &m, &n);\n    for (int i = 0; i < m; i++) table[i] = -1;\n    for (int i = 0; i < n; i++) {\n        int key;\n        scanf(\"%d\", &key);\n        int idx = key % m;\n        while (table[idx] != -1) idx = (idx + 1) % m;\n        table[idx] = key;\n    }\n    printf(\"Hash Table:\");\n    for (int i = 0; i < m; i++) printf(\" %d\", table[i]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "10 4\n21 31 41 11",
            "expected": "Hash Table: -1 21 31 41 11 -1 -1 -1 -1 -1"
          },
          {
            "input": "5 3\n7 12 3",
            "expected": "Hash Table: -1 -1 7 12 3"
          }
        ],
        "hidden_cases": [
          {
            "input": "5 5\n0 5 10 15 20\n",
            "expected": "Hash Table: 0 5 10 15 20"
          },
          {
            "input": "4 2\n3 7\n",
            "expected": "Hash Table: 7 -1 -1 3"
          },
          {
            "input": "6 3\n1 7 13\n",
            "expected": "Hash Table: -1 1 7 13 -1 -1"
          },
          {
            "input": "3 1\n5\n",
            "expected": "Hash Table: -1 -1 5"
          }
        ]
      }
    ]
  }
};
