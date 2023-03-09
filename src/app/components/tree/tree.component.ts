import { books } from './../../models/books';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public checkBoxForm!: FormGroup;
  public data = [...books.booksList];

  ngOnInit(): void {
    this.checkBoxForm = this.fb.group({
      booksArray: this.fb.array([]),
    });

    this.displayBooks();
  }

  get booksFormArray() {
    return <FormArray>this.checkBoxForm.get('booksArray');
  }

  displayBooks() {
    let transformedBooks = this.data.map((book: any) =>
      this.createBookFormGroup(book)
    );
    this.checkBoxForm.setControl('booksArray', this.fb.array(transformedBooks));
  }

  createBookFormGroup(book: any) {
    return this.fb.group({
      type: [book.type],
      authors: this.fb.array(this.loadAuthors(book.authors)),
    });
  }

  createAuthorFormGroup(author: any) {
    return this.fb.group({
      name: [author.name],
      select: this.fb.array(this.loadBooks(author.books)),
    });
  }

  loadAuthors(authorsList: any) {
    return authorsList.map((author: any) => this.createAuthorFormGroup(author));
  }

  loadBooks(books: any) {
    return books.map((book: any) => new FormControl(false));
  }

  returnAuthors(x: any) {
    return x.get('authors').controls;
  }

  returnBooks(x: any) {
    return x.get('select').controls;
  }

}
