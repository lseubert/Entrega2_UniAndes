const axios = require('axios');
const path = require('path');
const fs = require('fs');
const parse = require('node-html-parser').parse;

exports.getOverview = async (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
};
exports.getProviders = async (req, res, next) => {
    const provider = await axios.get(
        'https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json'
    );

    fs.readFile('./public/proveedores.html', 'utf8', (err, html) => {
        if (err) {
            throw err;
        }

        const root = parse(html);
        const tablebody = root.querySelector('.table-body');
        tablebody.innerHTML = '';

        provider.data.forEach(ele => {
            tablebody.insertAdjacentHTML(
                'beforeend',
                `<tr><th scope="row">${ele.idproveedor}</th><td>${ele.nombrecompania}</td><td>${ele.nombrecontacto}</td></tr>`
            );
        });

        fs.writeFile('./public/proveedores.html', root.toString(), 'utf-8', err => {
            console.log('written successfully');
	res.sendFile(path.join(__dirname + '/public/proveedores.html'));
        });
        
    });
};
exports.getClients = async (req, res, next) => {
    const client = await axios.get(
        'https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json'
    );

    fs.readFile('./public/clientes.html', 'utf8', (err, html) => {
        if (err) {
            throw err;
        }

        const root = parse(html);
        const tablebody = root.querySelector('.table-body');
        tablebody.innerHTML = '';

        client.data.forEach(ele => {
            tablebody.insertAdjacentHTML(
                'beforeend',
                `<tr><th scope="row">${ele.idCliente}</th><td>${ele.NombreCompania}</td><td>${ele.NombreContacto}</td></tr>`
            );
        });

        fs.writeFile('./public/clientes.html', root.toString(), 'utf-8', err => {
            console.log('written successfully');
	res.sendFile(path.join(__dirname + '/public/clientes.html'));
        });
    });
    
};
