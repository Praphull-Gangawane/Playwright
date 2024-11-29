import{test, expect}from '@playwright/test'
import { request } from 'http'
//GET Method
test('API GET Request', async({request})=>{

    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain('Janet')
    console.log(await response.json());
})
//POST Method
test.only('API Post req', async({request})=>{
    //using this req data has to pass with link
    const response = await request.post('https://reqres.in/api/users',{
        data:{
            "name": "Praphull",
            "job" : "tester"
        }
    })
    //to check the response code
    expect(response.status()).toBe(201)
    //to check the text inside the body
    const text = await response.text();
    expect(text).toContain('Praphull')
    await expect(response).toBeOK();
    //to get the output on the console
    console.log(await response.json());

})
//PUT Req
test.only('API PUT req', async({request})=>{
    //using this req data has to pass with link
    const response = await request.put('https://reqres.in/api/users/2',{
        data:{
            "name": "Praphull",
            "job" : "QA Engineer"
        }
    })
    //to check the response code
    expect(response.status()).toBe(200)
    //to check the text inside the body
    const text = await response.text();
    expect(text).toContain('QA Engineer')
    await expect(response).toBeOK();
    //to get the output on the console
    console.log(await response.json());

})
//DELETE Method
test('API DELETE Request', async({request})=>{

    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204)
    await expect(response).toBeOK();
    console.log(await response.json());
})