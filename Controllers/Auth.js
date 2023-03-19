const Authentification = require('../models/Company');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {

    try {
        // test si l’email de l‘utilisateur existe déjà ou non
        const exist = await Authentification.findOne({ email: req.body.email });
        if (exist) {
            return res.send({ message: 'Email already used ' });
        } else {
            // salt c'est le nombre de fois ou on va crypter le password
            const salt = await bcrypt.genSalt(10);

            // hashedPass est le password après cryptage
            const hashedPass = await bcrypt.hash(req.body.password, salt);

            const authentification = new Authentification({
                companyName: req.body.companyName,
                companyDescription: req.body.companyDescription,
                email: req.body.email,
                password: hashedPass,
                // role : req.body.role,
            });

            await Authentification.create(authentification);
            res.send(authentification);
        }
    } catch (error) {
        res.statuts(500).send({ message: error.message })
    }
};

exports.login = async (req, res) => {
    const authentification = await Authentification.findOne({ email: req.body.email });

    if (!authentification) {
        return res.status(400).send({ message: 'Invalid email or password' });
    } else {
        const validPassword = await bcrypt.compare(req.body.password, authentification.password);
        if (!validPassword) {
            return res.status(400).send({ message: 'Invalid email or password' });
        } else {
            // Token
            const payload = {
                email: authentification.email,
                id: authentification._id
            };
            const token = await jwt.sign(payload, process.env.Secret_Key, { expiresIn: '1d' });

            res.status(400).send({ message: 'login successful', token })
        };
    }
};

exports.logout = async (req, res) => {
    req.logout()
    res.json('You have successfully logged out ')
};