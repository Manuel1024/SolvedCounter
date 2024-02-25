const input_forms = document.querySelector('#input_forms');
const solved_table = document.querySelector('#solved_table');
const tweetbutton_parent = document.querySelector('.tweet');

const btn = document.querySelector('button');

let judgesList = [];
judgesList.push(new AOJ(input_forms, solved_table));
judgesList.push(new AtCoder(input_forms, solved_table));
judgesList.push(new Codeforces(input_forms, solved_table));
judgesList.push(new yukicoder(input_forms, solved_table));
judgesList.push(new TopCoder(input_forms, solved_table));

const totalRow = solved_table.insertRow();
const totalCaption = document.createElement('th');
totalRow.appendChild(totalCaption);
const totalCell = totalRow.insertCell();
totalCaption.textContent = "Total";

const handler = function() {
    // Tweetボタンを消す
    while(tweetbutton_parent.firstChild){
        tweetbutton_parent.removeChild(tweetbutton_parent.firstChild);
    }
    // Totalの表示をリセット
    totalCell.textContent = '';

    const vec = judgesList.map(obj => obj.fetchCount());
    Promise.allSettled(vec)
        .then(() => {
            let total = 0;
            for(let obj of judgesList){
                total += obj.count;
            }
            totalCell.textContent = total;

            // AC数のfetchが終わったらTweetボタンを表示
            const tweetbutton = document.createElement('a');
            let tweetText = 'Solved Count\n';
            for(let obj of judgesList){
                tweetText += obj.displayName() + ': ' + obj.count + '\n';
            }
            tweetText += 'Total: ' + total + '\n';
            tweetbutton.href = 'https://twitter.com/intent/tweet?'
            + 'text=' + encodeURIComponent(tweetText)
            + '&url=' + encodeURIComponent(location.href);
            tweetbutton.className = 'twitter-share-button';
            tweetbutton.innerText = 'Tweet';
            tweetbutton.target = '_blank';
            tweetbutton.relList = ['noopener', 'noreferrer'];
            tweetbutton_parent.appendChild(tweetbutton);
        });
};

btn.addEventListener('click', handler);