const PARAM_CONTAINER = document.querySelector('.result-container > table');
const formed_url = {
    host :''
}

const cretateParamsOnUI = (_url) => {
    for(param in _url){
        let param_ele = PARAM.content.cloneNode(true);
        param_ele.querySelector('.param-name').textContent = param;
        param_ele.querySelector('.param-value').textContent = _url[param];
        PARAM_CONTAINER.appendChild(param_ele);
    }
}

const processURL = (e) => {
    if(e.key === 'Enter' && e.currentTarget.value){
        console.log(e.currentTarget.value);
        try {
            const _url = new URL(e.currentTarget.value);
            formed_url.host = _url.host

            const url_key_it = _url.searchParams.keys();
            const url_val_it = _url.searchParams.values();

            let param_key_obj = url_key_it.next();
            let param_val_obj = url_val_it.next();
            while(!param_key_obj.done && !param_val_obj.done){
                formed_url[param_key_obj.value] = param_val_obj.value;
                param_key_obj = url_key_it.next();
                param_val_obj = url_val_it.next();
            }

            cretateParamsOnUI(formed_url);

        }catch(err){
            alert('Invalid URL');
        }
    }
}