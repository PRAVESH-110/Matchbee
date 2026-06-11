import { Controller, Get, Post, Query, Param, Body, Put, Delete, HttpCode } from '@nestjs/common';
import {CreateProfileDto} from './dto/create-profile.dto'
import {UpdateProfileDto} from './dto/update-profile.dto'

@Controller('profiles')
export class ProfilesController {
    //GET/ profiles
    // @Get()
    // findAll(){
    //     return [];
    // }

    //GET /profile by age passed as a query
    // @Get()
    // findAll(@Query('age') age: number){
    //     return [{age}];
    // }

    //GET: profiles/:id (return if of the respective user profile passed as a param )
    // @Get(':id')
    // findOne(@Param('id')id:number){
    //     return {id};
    // }

    //POST : profiles
    // @Post()
    // create(@Body() createProfileDto: CreateProfileDto){ //created a DTO to import body detais from
    //     return {
    //         name: createProfileDto.name,
    //         desc: createProfileDto.desc
    //     };
    // }


    //PUT: profiles/:id
    // @Put()
    // update(
    //     @Param('id') id:string, 
    //     @Body() updateProfileDto: UpdateProfileDto){ //created a DTO to import body detais from
    //     return {
    //         id,
    //         ...updateProfileDto
    //     };
    // }

    //DELETE: /profiles/:id
    @Delete(':id')
    //delete auto sends a 200 status, so http provides a way to control the status code
    @HttpCode(HttpStatus.NO_CONTENT) //NO_CONTENT is for 204 error
    remove(@Param('id') id:string){
    }



}
