#!/usr/bin/python
# -*- coding: utf-8 -*-
import unittest

from app import app, db
from config import settings


class UsersTests(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        app.config['WTF_CSRF_ENABLED'] = False
        app.config['DEBUG'] = False
        app.config['SQLALCHEMY_DATABASE_URI'] = \
            settings.SQLALCHEMY_TEST_DATABASE_URI
        self.app = app.test_client()
        with app.app_context():
            db.create_all()

        self.assertEqual(app.debug, False)

    def tearDown(self):
        with app.app_context():
            db.drop_all()

    def get_user(self):
        return self.app.get('/')

    def check_user(self):
        return self.app.get('/isauthenticated/')

    def login(self, email, name):
        return self.app.post('/openid/', json=dict(email=email,
                             name=name))

    def email_login(self, email):
        return self.app.post('/sendmail/', json=dict(email=email))

    def logout(self):
        return self.app.post('/logout/')

    def update_user(self, name):
        return self.app.post('/update/', json=dict(name=name))

    def test_login(self):

        # login user with openid. Response code = 200

        response = self.login('test@test.server.com', 'test_name')
        self.assertEqual(response.status_code, 200)

        # check user details. Response code = 200

        user_response = self.get_user()
        self.assertEqual(user_response.status_code, 200)

    # def test_email_login(self):

    #     # login user with email. Response code = 200

    #     response = self.email_login('test@test.server.com')
    #     self.assertEqual(response.status_code, 200)

    #     # verify token from email and login.
    #     implement this test

    def test_logout(self):

        # login user with openid. Response code = 200

        login_response = self.login('test@test.server.com', 'test_name')
        self.assertEqual(login_response.status_code, 200)

        # logout user. Response code = 200

        logout_user_response = self.logout()
        self.assertEqual(logout_user_response.status_code, 200)

        # try to logout user again. Response code = 204

        logout_user_response = self.logout()
        self.assertEqual(logout_user_response.status_code, 204)

    def test_check_user(self):

        # login user with openid. Response code = 200

        login_response = self.login('test@test.server.com', 'test_name')
        self.assertEqual(login_response.status_code, 200)

        # check if user is logged in. Response code = 200

        response = self.check_user()
        self.assertEqual(response.status_code, 200)

        # logout user. Response code = 200

        logout_user_response = self.logout()
        self.assertEqual(logout_user_response.status_code, 200)

        # check if user is logged in. Response code = 204

        response = self.check_user()
        self.assertEqual(response.status_code, 204)

    def test_get_user(self):

        # login user with openid. Response code = 200

        response = self.login('test@test.server.com', 'test_name')
        self.assertEqual(response.status_code, 200)

        # check user details. Response code = 200

        user_response = self.get_user()
        self.assertEqual(user_response.status_code, 200)

        # logout user. Response code = 200

        logout_user_response = self.logout()
        self.assertEqual(logout_user_response.status_code, 200)

        # check unknown user's details. Response code = 200

        user_response = self.get_user()
        self.assertEqual(user_response.status_code, 401)

    def test_update_user(self):

        # login user with openid. Response code = 200

        response = self.login('test@test.server.com', 'test_name')
        self.assertEqual(response.status_code, 200)

        # check user details. Response code = 200

        user_response = self.get_user()
        self.assertEqual(user_response.status_code, 200)

        # update user details. Response code = 200

        update_response = self.update_user('new_name')
        self.assertEqual(update_response.status_code, 200)

        # check user details. Response code = 200

        user_response = self.get_user()
        self.assertEqual(user_response.status_code, 200)
