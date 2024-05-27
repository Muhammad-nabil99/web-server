const Routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request,h) =>{
            return 'Homepage'
        }
    },
    {
        method : '*',
        path : '/',
        handler : (request,h) =>{
            return 'method tidak dapat di gunakan'
        }
    },
    {
        method : 'GET',
        path : '/about',
        handler : (request,h) =>{
            return 'about page'
        }
    },
    {
        method : '*',
        path : '/about',
        handler : (request,h) =>{
            return 'method tidak dapat di gunakan'
        }
    },
    {
        method : '*',
        path : '/{any*}',
        handler : (request,h) =>{
            return 'halaman tidak dapat di temukan'
        }
    },
    {
        method : 'GET',
        path : '/hello/{username?}',
        handler : (request,h) =>{
            const {username = 'stranger'} = request.params;
            const {lang} = request.query;
            if(lang === 'id'){
                return `hi! ${username}`
            }
            return `hello! ${username}`
        }
    },
    {
        method : 'POST',
        path : '/login',
        handler : (request,h) =>{
            const {password} = request.payload;
            return `Welcome! ${username}`
        }
    },
]



module.exports =  Routes;