import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BookstoreService } from './app.bookstoreService';
import { BooksEntity } from './books.entity'

@Controller('books')
export class BookstoreController{
  constructor(private readonly appService: BookstoreService) {}

  @Get('get/allBooks')
  getBooks() {
    return this.appService.getBooks();
  }

  @Get('get/book/:id')
  getBook(@Param('id') id: number) {
    return this.appService.getBook(id);
  }

  @Post('post/book')
  addBook(@Body() bDto: BooksEntity) {
    return this.appService.addBook(bDto);
  }

  @Put('put/book/:id')
  updateBook(@Param('id') id: number, @Body() bDto: BooksEntity) {
    return this.appService.updateBook(id, bDto)
  }

  @Delete('delete/book/:id')
  deleteBook(@Param('id') id: number) {
    return this.appService.deleteBook(id)
  }
}
