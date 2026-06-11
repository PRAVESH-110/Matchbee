import { Controller, Get, Query, Params } from '@nestjs/common';

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

    //GET: profiles/:id
    @Get()
    findOne(@Params('id')id:number){
        return 
    }
    //POST : profiles
    //PUT: profiles/:id
    //DELETE: /profiles/:id


}
