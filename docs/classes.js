class AOJ{
    constructor(InputFormsList, parentTable){
        this.listItem = document.createElement('li');
        InputFormsList.appendChild(this.listItem);
        this.listItem.appendChild(document.createTextNode(this.displayName() + ': '));
        this.username = document.createElement('input');
        this.listItem.appendChild(this.username);

        this.tableRow = parentTable.insertRow();
        this.caption = document.createElement('th');
        this.tableRow.appendChild(this.caption);
        this.cell = this.tableRow.insertCell();
        this.caption.textContent = this.displayName();

        this.cnt = 0;
    }

    get count(){
        return this.cnt;
    }

    displayName(){
        return "AOJ";
    }

    fetchCount(){
        return new Promise((resolve, reject) => {
            try{
                this.cnt = 0;
                this.cell.textContent = '';
                const endpoint = 'https://judgeapi.u-aizu.ac.jp/users/'
                + encodeURIComponent(this.username.value);
                fetch(endpoint)
                .then((response) => {
                    if(!response.ok){
                        throw new Error(`HTTP error: ${response.status}`);
                    }
                    return response.json()
                })
                .then((json) => {
                    this.cnt = json.status.solved;
                    this.cell.textContent = this.cnt;
                    resolve();
                })
                .catch((err) => {
                    reject();
                });
            }catch(err){
                reject();
            }
        });
    }
}

class AtCoder{
    constructor(InputFormsList, parentTable){
        this.listItem = document.createElement('li');
        InputFormsList.appendChild(this.listItem);
        this.listItem.appendChild(document.createTextNode(this.displayName() + ': '));
        this.username = document.createElement('input');
        this.listItem.appendChild(this.username);

        this.tableRow = parentTable.insertRow();
        this.caption = document.createElement('th');
        this.tableRow.appendChild(this.caption);
        this.cell = this.tableRow.insertCell();
        this.caption.textContent = this.displayName();

        this.cnt = 0;
    }

    get count(){
        return this.cnt;
    }

    displayName(){
        return "AtCoder";
    }

    fetchCount(){
        return new Promise((resolve, reject) => {
            try{
                this.cnt = 0;
                this.cell.textContent = '';
                if(!encodeURIComponent(this.username.value)){
                    throw new Error('AtCoder: username is empty');
                }
                const atcoder_endpoint = 'https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user='
                + encodeURIComponent(this.username.value);
                fetch(atcoder_endpoint)
                    .then((response) => {
                        if(!response.ok){
                            throw new Error(`HTTP error: ${response.status}`);
                        }
                        return response.json()
                    })
                    .then((json) => {
                        this.cnt = json.accepted_count;
                        this.cell.textContent = this.cnt;
                        resolve();
                    })
                    .catch((err) => {
                        reject();
                    });
            }catch(err){
                reject();
            }
        });
        
        
        // for(let i = 0; i < 1000*1000*5000; i++){}
    }
}

class yukicoder{
    constructor(InputFormsList, parentTable){
        this.listItem = document.createElement('li');
        InputFormsList.appendChild(this.listItem);
        this.listItem.appendChild(document.createTextNode(this.displayName() + ': '));
        this.username = document.createElement('input');
        this.listItem.appendChild(this.username);

        this.tableRow = parentTable.insertRow();
        this.caption = document.createElement('th');
        this.tableRow.appendChild(this.caption);
        this.cell = this.tableRow.insertCell();
        this.caption.textContent = this.displayName();

        this.cnt = 0;
    }

    get count(){
        return this.cnt;
    }

    displayName(){
        return "yukicoder";
    }

    fetchCount(){
        return new Promise((resolve, reject) => {
            try{
                this.cnt = 0;
                this.cell.textContent = '';
                const yukiendpoint = 'https://yukicoder.me/api/v1/user/name/'
                + encodeURIComponent(this.username.value);
                fetch(yukiendpoint)
                    .then((response) => {
                        if(!response.ok){
                            throw new Error(`HTTP error: ${response.status}`)
                        }
                        return response.json()
                    })
                    .then((json) => {
                        this.cnt = json.Solved;
                        this.cell.textContent = this.cnt;
                        resolve();
                    })
                    .catch((err) => {
                        reject();
                    });
            }catch(err){
                reject();
            }
        });
    }
}

class Codeforces{
    constructor(InputFormsList, parentTable){
        this.listItem = document.createElement('li');
        InputFormsList.appendChild(this.listItem);
        this.listItem.appendChild(document.createTextNode(this.displayName() + ': '));
        this.username = document.createElement('input');
        this.listItem.appendChild(this.username);

        this.tableRow = parentTable.insertRow();
        this.caption = document.createElement('th');
        this.tableRow.appendChild(this.caption);
        this.cell = this.tableRow.insertCell();
        this.caption.textContent = this.displayName();

        this.cnt = 0;
    }

    get count(){
        return this.cnt;
    }

    displayName(){
        return "Codeforces";
    }

    fetchCount(){
        return new Promise((resolve, reject) => {
            try{
                this.cnt = 0;
                this.cell.textContent = '';
                const cfendpoint = 'https://codeforces.com/api/user.status?handle='
                + encodeURIComponent(this.username.value);
                fetch(cfendpoint)
                    .then((response) => {
                        if(!response.ok){
                            throw new Error(`HTTP error: ${response.status}`)
                        }
                        return response.json()
                    })
                    .then((json) => {
                        let mem = {}
                        for(let v of json.result){
                            if(v.verdict != "OK" || v.testset != "TESTS") continue;
                            mem[v.problem.contestId.toString() + v.problem.index] = 0;
                        }
                        this.cnt = Object.keys(mem).length;
                        this.cell.textContent = this.cnt;
                        resolve();
                    })
                    .catch((err) => {
                        reject();
                    })
            }catch(err){
                reject();
            }
        });
    }
}

class TopCoder{
    constructor(InputFormsList, parentTable){
        this.listItem = document.createElement('li');
        InputFormsList.appendChild(this.listItem);
        this.listItem.appendChild(document.createTextNode(this.displayName() + ': '));
        this.username = document.createElement('input');
        this.listItem.appendChild(this.username);

        this.tableRow = parentTable.insertRow();
        this.caption = document.createElement('th');
        this.tableRow.appendChild(this.caption);
        this.cell = this.tableRow.insertCell();
        this.caption.textContent = this.displayName();

        this.cnt = 0;
    }

    get count(){
        return this.cnt;
    }

    displayName(){
        return "TopCoder";
    }

    fetchCount(){
        return new Promise((resolve, reject) => {
            try{
                this.cnt = 0;
                this.cell.textContent = '';
                const tcendpoint = 'https://api.topcoder.com/v5/members/'
                + encodeURIComponent(this.username.value)
                + '/stats';
                fetch(tcendpoint)
                    .then((response) => {
                        if(!response.ok){
                            throw new Error(`HTTP error: ${response.status}`)
                        }
                        return response.json()
                    })
                    .then((json) => {
                        const data1 = json['0']['DATA_SCIENCE']['SRM']['division1'];
                        const data2 = json['0']['DATA_SCIENCE']['SRM']['division2'];
                        for(const obj of data1){
                            this.cnt += obj['problemsSubmitted']-obj['problemsSysByTest']-obj['problemsFailed'];
                        }
                        for(const obj of data2){
                            this.cnt += obj['problemsSubmitted']-obj['problemsSysByTest']-obj['problemsFailed'];
                        }
                        this.cell.textContent = this.cnt;
                        resolve();
                    })
                    .catch((err) => {
                        reject();
                    })
            }catch(err){
                reject();
            }
        });
    }
}