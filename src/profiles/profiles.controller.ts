import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';
import {CreateProfileDto} from './dto/create-profile.dto'

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
    
    @Post()
    create(@Body() createProfileDto: CreateProfileDto){ //created a DTO to import body detais from
        return {
            name: createProfileDto.name,
            desc: createProfileDto.desc
        };
    }
    //PUT: profiles/:id

    //DELETE: /profiles/:id


}
