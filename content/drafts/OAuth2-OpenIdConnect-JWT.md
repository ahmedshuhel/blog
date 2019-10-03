## JWT
The defacto standards today and is relatively new.

## OAuth2

- What it's supposed to do
- What it's not good for
- Flows/Protools/Variations and interactions

## OpenIdConnect
Build on top of oAuth2

## Enterprise Security
- Everything lives in the "Trust Boundry"
- Active Directory: Everything is managed
- LDAP/Kerberos: Works well with intranet but don't work well with internet.
- SOAP/WS\* protocol and XML/SAML based protocol were used for business to business integration (WS Security, WS Trust, WS Fedaration, SAML2p)

## Mobile Era/Single Page Application
- Different form factor
- Consumer device
- NO SOAP, NO SAML, No WS
- HTTP and JSON
- Connect enterprise service.

We need a common denominator technology that can handle everything and OAuth2 and OpenIdConnect solves that problem

## OAuth2 and OpenIdConnect
It's about authorization or deligated authorization. You are writing an app that needs to access some backend service. In traditional enterprise settings the way it works is you pop up a login dialog and take user name and password. This might work if the client and service and authentication service come from the same vendor. 

Now that we have multitude of client platform, backend service and auth provider (fb login, google login). You cannot give the clint app the user password becasue it lives outside the trust boundry. Oauth2 is about requesting `access_token` from authorization server and use the `access_token` to talk to backend service.

OpenIdConnect solves the authentication problem. The idea is that may be the application(client) does not need to talk to a backend service it wants to know who the user is. So, you make a roundtrip to the authentication server and you provide username/password to the authentication server and it gives you a token back to the client which allows you to validate your identity. And later the client use oAuth to get another token to talk to the service.


## JWT
Emerging standards, very close to standardardization, IETF is taking care of that. *oAuth2 does not mandate* (but most use jwt) but OpenIdConnect mandates all of the tokens to be JWT.

### Security Token
- contains info about issuer and subject
- signed (temper proof & authenticiy)
- typically contains expiration date
- Flow
  - Client request a token
  - An issuer issues the token
  - A resource consumes the token
    - Has a trust relationship with the issuer. They typically has some a priory key exchanged so consumer knows about the key that issurer used to sign the token and use that *key*  to validate the token and if that validation succeed the resource can use the *claims* inside the token.


### Structure of JWT
Show and example

- Header
  - metadata
  - algorithms
- Claims
  - Issuer
  - Audiance
  - IssuedAt
  - Expiration
  - Subject

Usually base64 url encoded

Lifecyce: crete/transmit/parse/validate
### How to produce a jwt token
- link node library with example

### Consuming jwt token/validate
- link node/python lib

### Symmetric/Asymemtric encryption/hashing JWT and recommendations
- Public/private key signed
- Server less validation
- Impect is less roundtrip to the authorization server
- Don't need a token store, we can generate only at refresh.


## oAuth2
Authorization framework. Working deployment of various drafts and versions at Google, Microsoft, Gitub, Facebook, Twitter, etc.


## oAuth vs HTTP signature aka the AWS way


> best of breed is combining oAuth and HTTP signature

#### Controversy:
The main author and eidtor regined
https://hueniverse.com/oauth-2-0-and-the-road-to-hell-8eec45921529
https://www.cnet.com/news/oauth-2-0-leader-resigns-says-standard-is-bad/
Main criticism seems to be oAuth became too complicated and big (not in terms of implementation) as more and more big companies like Google, Microsoft, Facebook got involved in the standardardization process and pushed to support their use case.
It's not just "Web" and simple anymore. It took many years to approve.

Oct 2012: oAuth2 finally signed off.

*OAuth2 Vernaribilities and Guidelines* https://ldapwiki.com/wiki/OAuth%202.0%20Vulnerabilities
Best practices: https://ldapwiki.com/wiki/Best%20Practices%20OpenID%20Connect

## OAUTH 2.0 TERMINOLOGY
To make sense of it, you'll need to learn it's terminology.

## INVOLVED PARTIES
First you need to know about the involved parties:

### Client : A client application, e.g. your web-, mobile- or desktop-app.

### Resource Owner : The user of your app who also happens to have access to some content on an OAuth 2.0 protected server.

> In enterprise resource owner and client often means the same thing. outh2 takes the software into account as it has variying trust level.
https://hueniverse.com/explaining-oauth-3735e3de27a8
https://www.varonis.com/blog/what-is-oauth/
https://medium.com/google-cloud/understanding-oauth2-and-building-a-basic-authorization-server-of-your-own-a-beginners-guide-cf7451a16f66


### Resource Server : An OAuth 2.0 protected server that serves some content if you hand it a valid Access Token.

### Authorization Server : A server that the Resource Server trusts. It hosts a login page, that the user logs into. After the user logs in successfully and confirms the request, it will issue an Authorization Grant. It will also exchange an Authorization Grant for an Access Token for the client.

## EXCHANGED OBJECTS
Then you need to know about the objects being being exchanged between those parties:

### Resource : A Resource is some user content protected by OAuth 2.0 and provided by a Resource Server.

### Authorization Request : The Authorization Request is what happens when your App requests access to a Resource of the User.

### Authorization Grant : The Authorizaton Grant is returned as a response on a Client's successful Authorization Request. It can be exchanged for an Access Token.

### Access Token : A token that is used to retrieve content from a Resource Server instead of user credentials. It is issued by the Authorization Server.

### Refresh Token : An optional token that can be returned by the Authorization Server in addition to the Access Token. It can be used to retrieve additional Access Token if for example the original Access Token expires.

### Claim

### Scopes

### Claims vs Scope

## Auth Flows
http://lostindetails.com/articles/A-look-at-OAuth-2.0
http://www.krishantha.net/oauth2-openid-connect-jwt/


### Authorization Code Flow
Resource Owner            Client                   Authriztion Server
|                          |                                      |
|                          |------------------------------------->|
|                          | GET /authorize?client_id=webapp&     |
|                          |     scope=task_api&                  |
|                          |     redirect_uri=https://webap/cb&   |
|                          |     respone_type=code&               |
|                          |     state=123                        |
|                          |<-------------------------------------|
|                          |    GET /cb?code=xyz&state=123
|                          |
|                          |-------------------------------------->
|                          | POST /token
|                          |   Authorization: Basic (client_id:secret)
|                          | grant_type=authorization_code&
|                          | authorization_code=xyz&
|                          | redirect_uri=https://webap/cb
|                          |<-------------------------------------|
|                          |  {
                                "access_token": "abc-abc",
                                "expires_in": "date",
                                "token_type": "Bearer"
                                "refresh_token": "xyz"
                              }


## Show the trust boundry
- Regular oAuth between client Resource Owner and Resource Server, Authorization Server
- Compare the boundry with CMP and SSO

