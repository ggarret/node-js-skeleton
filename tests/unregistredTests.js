var assert = require("assert");

var should = require('chai').should(),
    supertest = require('supertest');


var agentUnregistred= supertest.agent('http://localhost:8080');

var UnregistredUser = {
    username: 'superFakeTest',
    password: 'superFakeTest',
    email: 'superFakeTest@superFakeTest.com',
    gender: 1
};


it('should return HTTP Code 401 - Try to login - unregistred user', function (done)
{
    agentUnregistred.post('/app/connection')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(UnregistredUser)
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});

it('should return HTTP Code 401 - Try to get current user info - unregistred user', function (done)
{
    agentUnregistred.get('/app/user')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .expect(401)
    .end(function (err, res)
    {   
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});

it('should return HTTP Code 401 - Try to update current user info - unregistred user', function (done)
{
    agentUnregistred.put('/app/user')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(UnregistredUser)
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});

it('should return HTTP Code 401 - Try to get body measurements - unregistred user', function (done)
{
    agentUnregistred.get('/app/measures')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({category : 1})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});


it('should return HTTP Code 401 - Try to update body measurements - unregistred user', function (done)
{
    agentUnregistred.put('/app/measures/1')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({value : 80})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});




/**************************************FRIENDS**************************************************/
it('should return HTTP Code 401 - Get Friends list - unregistred user', function (done)
{
    agentUnregistred.get('/app/friends')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({page: 1, items_per_page: 10})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});

it('should return HTTP Code 401 - get all recommendations - unregistred user', function (done)
{
     agentUnregistred.get('/app/recommendations')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({type : 'author', page: 1000, items_per_page :999999})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});



it('should return HTTP Code 401 - add recommendations - unregistred user', function (done)
{
     agentUnregistred.post('/app/recommendations')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({reference : '12210020802', recipient: 1, message: 'Bonjour!'})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});


it('should return HTTP Code 401 - delete recommendations - unregistred user', function (done)
{
     agentUnregistred.delete('/app/recommendations/')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({id : 1})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});

/**************************************Size calculations**************************************************/
it('should return HTTP Code 401 - Get size calculation  - unregistred user', function (done)
{
    agentUnregistred.get('/app/sizes')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({reference  : '12210020802'})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});

//TODO ADD TEST ON UNKNOWN REFERENCE
it('should return HTTP Code 401 - Get size calculation for a friend - unregistred user', function (done)
{
     agentUnregistred.get('/app/sizes/friends/1')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({reference: '12210020802'})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
    
});

/**************************************Partners**************************************************/
it('should return HTTP Code 401 - Get all partners - unregistred user', function (done)
{
     agentUnregistred.get('/app/partners')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});

/**************************************Carousels**************************************************/
it('should return HTTP Code 401 - Get Carousels - unregistred user', function (done)
{
     agentUnregistred.get('/app/carousels')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({type : 'intro_mobile', version: 'iphone', resolution: '@1x'})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});

it('should return HTTP Code 401 - Get all favorite products - unregistred user', function (done)
{
     agentUnregistred.get('/app/favorite_products')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});

it('should return HTTP Code 401 - add favorite products - unregistred user', function (done)
{
     agentUnregistred.post('/app/favorite_products')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({product_reference  : 8580})
    .expect(401)
    .end(function (err, res)
    {   
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});


it('should return HTTP Code 401 - delete favorite products - unregistred user', function (done)
{
    agentUnregistred.delete('/app/favorite_products')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({product_reference  : 8580})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});


/**************************************Scan History**************************************************/
it('should return HTTP Code 401 - Get all scanned products - unregistred user', function (done)
{
     agentUnregistred.get('/app/scans')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({page : 1, items_per_page: 10})
    .expect(401)
    .end(function (err, res)
    {
        if (err)
        {
            done(err);
        } else 
        {
            done();
        }
    });
});
