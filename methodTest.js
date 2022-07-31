const validRequests = ['POST', 'GET', 'PUT', 'DELETE'];
var linkAndReq = 'https://httpbin.org/';
var requestType = 'none';

function sendRequest(event) {
    event.preventDefault();

    let req = new XMLHttpRequest();
    let date = new Date();

    req.addEventListener('load', () => {
        console.log(`req.responseText = ${req.responseText}`);
        document.getElementById('response-output').innerHTML = req.responseText;
    });

    if(!validRequests.includes(requestType)) {
        console.log(`${requestType} is an INVALID REQUEST`);
        return;
    }

    console.log(`Resquest: ${requestType} \t link: ${linkAndReq}`);
    req.open(requestType, linkAndReq);

    let id = document.getElementById('id').value;
    let articleName = document.getElementById('article-name').value;
    let articleBody = document.getElementById('article-body').value;
    let form = document.getElementById('hw5-form');
    let data = 'id='+id+'&articleName='+articleName+'&articleBody='+articleBody+'&date='+date;

    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(data);
    form.reset();
    linkAndReq = 'https://httpbin.org/';
}

document.addEventListener('DOMContentLoaded', () => {

    let capId;
    let lowerId;
    document.querySelectorAll('button').forEach(btn => {

        btn.addEventListener('click', () => {
            
            capId = btn.id.toUpperCase();
            console.log(`capId = ${capId}`);
            lowerId = btn.id.toLowerCase();

            if(!validRequests.includes(capId)) {
                console.log('invalid capId');
                return;
            }

            linkAndReq = linkAndReq + lowerId;
            requestType = capId;
            console.log(`Request Type = ${requestType}`);
            console.log(`linkAndReq = ${linkAndReq}`)
        });
    });

    document.getElementById('hw5-form').addEventListener('submit', sendRequest);
});