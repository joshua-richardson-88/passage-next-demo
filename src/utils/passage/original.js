var M = Object.create;
var y = Object.defineProperty;
var z = Object.getOwnPropertyDescriptor;
var K = Object.getOwnPropertyNames,
    N = Object.getOwnPropertySymbols,
    W = Object.getPrototypeOf,
    I = Object.prototype.hasOwnProperty,
    C = Object.prototype.propertyIsEnumerable;

var D = (a, e, t) => (e in a ? y(a, e, { enumerable: true, configurable: true, writable: true, value: t }) : (a[e] = t)),
    U = (a, e) => {
        for (var t in e || (e = {})) I.call(e, t) && D(a, t, e[t]);
        if (N) for (var t of N(e)) C.call(e, t) && D(a, t, e[t]);
        return a;
    };
var V = (a, e) => {
        for (var t in e) y(a, t, { get: e[t], enumerable: true });
    },
    B = (a, e, t, i) => {
        if ((e && typeof e == "object") || typeof e == "function") for (let s of K(e)) !I.call(a, s) && s !== t && y(a, s, { get: () => e[s], enumerable: !(i = z(e, s)) || i.enumerable });
        return a;
    };
var Y = (a, e, t) => ((t = a != null ? M(W(a)) : {}), B(e || !a || !a.__esModule ? y(t, "default", { value: a, enumerable: true }) : t, a)),
    Q = (a) => B(y({}, "__esModule", { value: true }), a);
var ee = {};
V(ee, { Identifier: () => H, Passage: () => O, PassageError: () => r, PassageErrorCode: () => f, PassageUserStatus: () => $, RequiredIdentifier: () => j, User: () => v, UserMetadataType: () => q });
module.exports = Q(ee);
// var d = class {
//     encodeBytes(e) {
//         return btoa(String.fromCharCode(...new Uint8Array(e)))
//             .replace(/\+/g, "-")
//             .replace(/\//g, "_")
//             .replace(/=+$/, "");
//     }
//     decodeBytes(e) {
//         let t = e.replace(/-/g, "+").replace(/_/g, "/").replace(/=+$/, "");
//         return Uint8Array.from(atob(t), (s) => s.charCodeAt(0));
//     }
// };
// var r = class extends Error {
//         constructor(t, i) {
//             super();
//             (this.name = "PassageError"), (this.statusCode = i.status), (this.statusText = i.statusText), (this.message = this._parsePsgErrorResponse(t));
//         }
//         _parsePsgErrorResponse(t) {
//             try {
//                 return (t = JSON.parse(t)), t.error ? t.error : "";
//             } catch {
//                 return t;
//             }
//         }
//     },
    f = ((n) => (
        (n[(n.MultipleChoice = 300)] = "MultipleChoice"),
        (n[(n.MovedPermanantly = 301)] = "MovedPermanantly"),
        (n[(n.Found = 302)] = "Found"),
        (n[(n.SeeOther = 303)] = "SeeOther"),
        (n[(n.NotModified = 304)] = "NotModified"),
        (n[(n.TemporaryRedirect = 307)] = "TemporaryRedirect"),
        (n[(n.PermanentRedirect = 308)] = "PermanentRedirect"),
        (n[(n.BadRequest = 400)] = "BadRequest"),
        (n[(n.Unauthorized = 401)] = "Unauthorized"),
        (n[(n.PaymentRequired = 402)] = "PaymentRequired"),
        (n[(n.Forbidden = 403)] = "Forbidden"),
        (n[(n.NotFound = 404)] = "NotFound"),
        (n[(n.MethodNotAllowed = 405)] = "MethodNotAllowed"),
        (n[(n.NotAcceptable = 406)] = "NotAcceptable"),
        (n[(n.ProxyAuthenticationRequired = 407)] = "ProxyAuthenticationRequired"),
        (n[(n.RequestTimeout = 408)] = "RequestTimeout"),
        (n[(n.Conflict = 409)] = "Conflict"),
        (n[(n.Gone = 410)] = "Gone"),
        (n[(n.LengthRequired = 411)] = "LengthRequired"),
        (n[(n.PreconditionFailed = 412)] = "PreconditionFailed"),
        (n[(n.PayloadTooLarge = 413)] = "PayloadTooLarge"),
        (n[(n.URITooLong = 414)] = "URITooLong"),
        (n[(n.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
        (n[(n.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
        (n[(n.ExpectationFailed = 417)] = "ExpectationFailed"),
        (n[(n.MisdirectedRequest = 421)] = "MisdirectedRequest"),
        (n[(n.UnprocessableEntity = 422)] = "UnprocessableEntity"),
        (n[(n.Locked = 423)] = "Locked"),
        (n[(n.FailedDependency = 424)] = "FailedDependency"),
        (n[(n.TooEarly = 425)] = "TooEarly"),
        (n[(n.UpgradeRequired = 426)] = "UpgradeRequired"),
        (n[(n.PreconditionRequired = 428)] = "PreconditionRequired"),
        (n[(n.TooManyRequests = 429)] = "TooManyRequests"),
        (n[(n.RequestHeaderFieldsTooLarge = 431)] = "RequestHeaderFieldsTooLarge"),
        (n[(n.UnavailableForLegalReasons = 451)] = "UnavailableForLegalReasons"),
        (n[(n.InternalServerError = 500)] = "InternalServerError"),
        (n[(n.NotImplemented = 501)] = "NotImplemented"),
        (n[(n.BadGateway = 502)] = "BadGateway"),
        (n[(n.ServiceUnavailable = 503)] = "ServiceUnavailable"),
        (n[(n.GatewayTimeout = 504)] = "GatewayTimeout"),
        (n[(n.HTTPVersionNotSupported = 505)] = "HTTPVersionNotSupported"),
        (n[(n.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
        (n[(n.InsufficientStorage = 507)] = "InsufficientStorage"),
        (n[(n.LoopDetected = 508)] = "LoopDetected"),
        (n[(n.NotExtended = 510)] = "NotExtended"),
        (n[(n.NetworkAuthenticationRequired = 511)] = "NetworkAuthenticationRequired"),
        (n[(n.PSGCredObjectDoesNotExist = 700)] = "PSGCredObjectDoesNotExist"),
        (n[(n.PSGParsePublicKeyForNewDeviceFailed = 701)] = "PSGParsePublicKeyForNewDeviceFailed"),
        (n[(n.PSGParsePublicKeyForLoginFailed = 702)] = "PSGParsePublicKeyForLoginFailed"),
        (n[(n.PSGCouldNotGetUserCredential = 703)] = "PSGCouldNotGetUserCredential"),
        n
    ))(f || {});
var A = new d(),
    // h = class {
    //     _isLocalHost() {
    //         return Boolean(window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    //     }
    //     _isHttps() {
    //         return location.protocol === "https:";
    //     }
    //     setAuthToken(e) {
    //         localStorage.setItem("psg_auth_token", e);
    //         let t = !this._isHttps() && this._isLocalHost();
    //         document.cookie = `psg_auth_token = ${e}; path=/ ${t ? "" : ";secure"}`;
    //     }
    //     deleteAuthToken() {
    //         localStorage.removeItem("psg_auth_token"), (document.cookie = "psg_auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;");
    //     }
    //     async psgCredIDExists(e) {
    //         let t = e.user.id,
    //             i = e.handshake.challenge.publicKey.allowCredentials,
    //             s = localStorage.getItem("psg_cred_obj");
    //         if (!s) throw new r("Could not get psg_cred_obj", { status: 700, statusText: "PSG Cred Object Does Not Exist" });
    //         let c = JSON.parse(s)[t];
    //         return i.find((L) => {
    //             if (A.encodeBytes(A.decodeBytes(L.id)) === A.encodeBytes(A.decodeBytes(c))) return true;
    //         });
    //     }
    //     setPsgCredID(e, t) {
    //         if (!t) throw new r("Could not get user's credential", { status: 703, statusText: "PSG Could Not Get User Credential" });
    //         let i = localStorage.getItem("psg_cred_obj");
    //         if (i) {
    //             let s = JSON.parse(i);
    //             (s[e] = t == null ? undefined : t.id), localStorage.setItem("psg_cred_obj", JSON.stringify(s));
    //         } else localStorage.setItem("psg_cred_obj", JSON.stringify({ [e]: t == null ? undefined : t.id }));
    //     }
    // };
async function o(a) {
    return a.ok
        ? a.json()
        : await a.text().then((e) => {
              throw new r(e, a);
          });
}
function R() {
    let a = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
        e = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./),
        t = e ? parseInt(e[1]) : 0;
    return navigator.platform.indexOf("Win") !== -1 && a && t === 98;
}
const isFirefoxOnWindows = () => {
  const navShowsFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  const _window = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./)
  const firefoxPosition = _window ? parseInt(_window[1]) : 0

  return navigator.platform.indexOf('Win') !== -1 && navShowsFirefox && firefoxPosition === 98
}
function x(a) {
    let e = new Uint8Array(68);
    e.set(a.slice(0, 68));
    let t = new Uint8Array(a.byteLength - 68);
    t.set(a.slice(68, a.byteLength));
    let i = new Uint8Array(15),
        s = new Uint8Array(e.byteLength + i.byteLength + t.byteLength);
    s.set(e, 0), s.set(i, e.byteLength), s.set(t, e.byteLength + i.byteLength);
    let c = s[30] + 15;
    return s.set([c], 30), s;
}
var b = new d(),
    X = new h(),
    _ = class {
        constructor(e, t) {
            (this.apiUrl = e + "/register/"), (this.identifier = t);
        }
        async withWebAuthn() {
            let e = await fetch(this.apiUrl + "webauthn/start", { body: JSON.stringify({ identifier: this.identifier }), method: "POST" }).then(o),
                t = await navigator.credentials
                    .create({ publicKey: this._parsePublicKey(e.handshake.challenge.publicKey) })
                    .catch((l) => {
                        throw new r("error parsing public key for webAuthn", { status: 702, statusText: "PSG Parse Public Key For Login Failed" });
                    })
                    .then((l) => l),
                i = new Uint8Array(t == null ? undefined : t.response.attestationObject);
            R() && (i = x(i));
            let s = e.user.id,
                c = await fetch(this.apiUrl + "webauthn/finish", {
                    method: "POST",
                    body: JSON.stringify({
                        user_id: s,
                        handshake_id: e.handshake.id,
                        handshake_response: {
                            rawId: b.encodeBytes(t == null ? undefined : t.rawId),
                            id: t == null ? undefined : t.id,
                            type: t == null ? undefined : t.type,
                            response: { 
                              attestationObject: b.encodeBytes(i), 
                              clientDataJSON: b.encodeBytes(t == null ? undefined : t.response.clientDataJSON) 
                            },
                        },
                    }),
                }).then(o);
            return X.setPsgCredID(s, t), c.auth_result;
        }
        _parsePublicKey(e) {
            return (e.challenge = b.decodeBytes(e.challenge.toString())), (e.user.id = b.decodeBytes(e.user.id.toString())), e;
        }
    };
var m = new d(),
    Z = new h(),
    k = class {
        constructor(e, t) {
            (this.apiUrl = e + "/login/"), (this.identifier = t);
        }
        async withWebAuthn() {
            let e = await fetch(this.apiUrl + "webauthn/start", { body: JSON.stringify({ identifier: this.identifier }), method: "POST" }).then(o);
            if (!(await Z.psgCredIDExists(e))) throw new r("psg_cred_obj does not exist in the allow list", { status: 700, statusText: "psg_cred_obj does not exist in the allow list" });
            let i = await navigator.credentials
                .get({ publicKey: this._parsePublicKey(e.handshake.challenge.publicKey) })
                .catch((c) => {
                    throw new r("error parsing public key for webAuthn", { status: 702, statusText: "PSG Parse Public Key For Login Failed" });
                })
                .then((c) => c);
            return i
                ? (
                      await fetch(this.apiUrl + "webauthn/finish", {
                          method: "POST",
                          body: JSON.stringify({
                              user_id: e.user.id,
                              handshake_id: e.handshake.id,
                              handshake_response: {
                                  id: i.id,
                                  rawId: m.encodeBytes(i.rawId),
                                  type: i.type,
                                  response: {
                                      clientDataJSON: m.encodeBytes(i.response.clientDataJSON),
                                      authenticatorData: m.encodeBytes(i.response.authenticatorData),
                                      signature: m.encodeBytes(i.response.signature),
                                      userHandle: m.encodeBytes(i.response.userHandle),
                                  },
                              },
                          }),
                      }).then(o)
                  ).auth_result
                : { auth_token: "", redirect_url: "" };
        }
        _parsePublicKey(e) {
            if (((e.challenge = Uint8Array.from(atob(e.challenge.toString()), (t) => t.charCodeAt(0))), e.allowCredentials)) {
                for (let t = 0; t < e.allowCredentials.length; t++) {
                    let i = e.allowCredentials[t];
                    i.id = m.decodeBytes(i.id.toString());
                }
                return e;
            }
            return e;
        }
    };
var w = class {
    constructor(e) {
        this.apiUrl = e;
    }
    async appInfo() {
        return (await fetch(this.apiUrl, { headers: {}, method: "GET" }).then(o)).app;
    }
    async identifierExists(e) {
        return (await fetch(this.apiUrl + "/users?identifier=" + encodeURIComponent(e), { method: "GET" }).then(o)).user;
    }
};
var p = new d(),
    F = new h(),
    g = class {
        constructor(e) {
            this.apiUrl = e;
        }
        async newRegister(e) {
            return (await fetch(this.apiUrl + "/register/magic-link", { method: "POST", body: JSON.stringify({ identifier: e, magic_link_path: window.location.pathname }) }).then(o)).magic_link;
        }
        async newLogin(e) {
            return (await fetch(this.apiUrl + "/login/magic-link", { method: "POST", body: JSON.stringify({ identifier: e, magic_link_path: window.location.pathname }) }).then(o)).magic_link;
        }
        async getStatus(e) {
            return (await fetch(this.apiUrl + "/magic-link/status", { method: "POST", body: JSON.stringify({ id: e }) }).then(o)).auth_result;
        }
        async activate(e) {
            return (await fetch(this.apiUrl + "/magic-link/activate", { method: "PATCH", body: JSON.stringify({ magic_link: e }) }).then(o)).auth_result;
        }
        async activateWebAuthnLogin(e) {
            let t = await fetch(this.apiUrl + "/magic-link/webauthn/login/start", { body: JSON.stringify({ magic_link: e }), method: "POST" }).then(o);
            if (!(await F.psgCredIDExists(t))) throw new r("psg_cred_obj does not exist in the allow list", { status: 700, statusText: "Not Found" });
            let s = await navigator.credentials.get({ publicKey: this._parsePublicKeyLogin(t.handshake.challenge.publicKey) }).catch((l) => {
                throw new r("could not parse publickey for login", { status: 702, statusText: "PSG Parse Public Key For Login Failed" });
            });
            return s
                ? (
                      await fetch(this.apiUrl + "/magic-link/webauthn/login/finish", {
                          method: "POST",
                          body: JSON.stringify({
                              magic_link: e,
                              user_id: t.user.id,
                              handshake_id: t.handshake.id,
                              handshake_response: {
                                  id: s.id,
                                  rawId: p.encodeBytes(s.rawId),
                                  type: s.type,
                                  response: {
                                      clientDataJSON: p.encodeBytes(s.response.clientDataJSON),
                                      authenticatorData: p.encodeBytes(s.response.authenticatorData),
                                      signature: p.encodeBytes(s.response.signature),
                                      userHandle: p.encodeBytes(s.response.userHandle),
                                  },
                              },
                          }),
                      }).then(o)
                  ).auth_result
                : { auth_token: "", redirect_url: "" };
        }
        async activateWebAuthnNewDevice(e) {
            let t = await fetch(this.apiUrl + "/magic-link/webauthn/new/start", { body: JSON.stringify({ magic_link: e }), method: "POST" }).then(o),
                i = await navigator.credentials.create({ publicKey: this._parsePublicKeyNewDevice(t.handshake.challenge.publicKey) }).catch((L) => {
                    throw new r("could not parse public key for new device", { status: 701, statusText: "PSG Parse Public Key For New Device Failed" });
                }),
                s = new Uint8Array(i == null ? undefined : i.response.attestationObject);
            R() && (s = x(s));
            let c = await fetch(this.apiUrl + "/magic-link/webauthn/new/finish", {
                    method: "POST",
                    body: JSON.stringify({
                        magic_link: e,
                        user_id: t.user.id,
                        handshake_id: t.handshake.id,
                        handshake_response: { rawId: p.encodeBytes(i.rawId), id: i.id, type: i.type, response: { attestationObject: p.encodeBytes(s), clientDataJSON: p.encodeBytes(i.response.clientDataJSON) } },
                        device_name: navigator.userAgent,
                    }),
                }).then(o),
                l = t.user.id;
            return F.setPsgCredID(l, i), c.auth_result;
        }
        _parsePublicKeyLogin(e) {
            if (((e.challenge = Uint8Array.from(atob(e.challenge.toString()), (t) => t.charCodeAt(0))), e.allowCredentials)) {
                for (let t = 0; t < e.allowCredentials.length; t++) {
                    let i = e.allowCredentials[t];
                    i.id = p.decodeBytes(i.id.toString());
                }
                return e;
            }
            return e;
        }
        _parsePublicKeyNewDevice(e) {
            return (e.challenge = p.decodeBytes(e.challenge.toString())), (e.user.id = p.decodeBytes(e.user.id.toString())), e;
        }
    };
var J = { URL: "https://auth.passage.id" };
var P = J;
var S = Y(require("jwt-decode"), 1);
var T = new d(),
    E = new h(),
    v = class {
        constructor(e) {
            (this.userID = ""), (this._iss = ""), (this.authToken = e), this.authGuard(), (this._apiVersion = "v1");
            try {
                new URL(this._iss), (this._currentUserEndpoint = `${this._iss}/currentuser`);
            } catch {
                this._currentUserEndpoint = `${P.URL}/${this._apiVersion}/apps/${this._iss}/currentuser`;
            }
        }
        _getAuthToken() {
            if (this.authToken !== undefined && this.authToken !== "") return this.authToken;
            if (typeof window > "u") return console.warn("PassageUser is failed to access localStorage. This function must be run client-side or be provided an authToken JWT."), "";
            let e = localStorage.getItem("psg_auth_token");
            return e || "";
        }
        _validJWTPayload(e) {
            let t = ["exp", "iss", "sub"],
                i = Math.floor(Date.now() / 1e3);
            return (
                t.forEach((s) => {
                    if (!(s in e)) return false;
                }),
                !(e.exp && i > e.exp)
            );
        }
        _validJWTHeader(e) {
            let t = { alg: "RS256", typ: "JWT" };
            return !(e.alg !== t.alg || e.typ !== t.typ);
        }
        authGuard() {
            let e = this._getAuthToken();
            try {
                let t = (0, S.default)(e, { header: true }),
                    i = (0, S.default)(e);
                return i !== undefined && t !== undefined && this._validJWTPayload(i) && this._validJWTHeader(t) ? ((this.userID = i.sub), (this._iss = i.iss), true) : false;
            } catch {
                return false;
            }
        }
        async userInfo() {
            return this.authGuard()
                ? (
                      await fetch(this._currentUserEndpoint, { method: "GET", headers: { Authorization: `Bearer ${this._getAuthToken()}` } })
                          .then(async (t) => (t.status !== 200 ? undefined : await t.json()))
                          .catch((t) => {
                              throw new r("Failed to fetch current user.", { status: 404, statusText: "Not Found" });
                          })
                  ).user
                : undefined;
        }
        async changeEmail(e) {
            if (!this.authGuard) throw new r("Current user is not authorized.", { status: 401, statusText: "Unauthorized" });
            return (await fetch(`${this._currentUserEndpoint}/email`, { method: "PATCH", headers: { Authorization: `Bearer ${this._getAuthToken()}`, "Content-Type": "application/json" }, body: JSON.stringify({ new_email: e }) }).then(o))
                .magic_link;
        }
        async changePhone(e) {
            if (!this.authGuard) throw new r("Current user is not authorized.", { status: 401, statusText: "Unauthorized" });
            return (await fetch(`${this._currentUserEndpoint}/phone`, { method: "PATCH", headers: { Authorization: `Bearer ${this._getAuthToken()}`, "Content-Type": "application/json" }, body: JSON.stringify({ new_phone: e }) }).then(o))
                .magic_link;
        }
        async editDevice(e, t) {
            if (!this.authGuard) throw new r("Current user is not authorized.", { status: 409, statusText: "Conflict" });
            if (e === "" || e === undefined) throw new r("A deviceID is required for an edit device request.", { status: 400, statusText: "Bad Request" });
            if (Object.keys(t).length === 0) throw new r("Edit device request must not have an empty request body.", { status: 400, statusText: "Bad Request" });
            return (await fetch(`${this._currentUserEndpoint}/devices/${e}`, { method: "PATCH", headers: { Authorization: `Bearer ${this._getAuthToken()}`, "Content-Type": "application/json" }, body: JSON.stringify(U({}, t)) }).then(o))
                .device;
        }
        async listDevices() {
            if (!this.authGuard) throw new r("Current user is not authorized.", { status: 401, statusText: "Unauthorized" });
            return (await fetch(`${this._currentUserEndpoint}/devices/`, { method: "GET", headers: { Authorization: `Bearer ${this._getAuthToken()}`, "Content-Type": "application/json" } }).then(o)).devices;
        }
        async addDevice() {
            if (!this.authGuard()) throw new r("Current user is not authorized.", { status: 401, statusText: "Unauthorized" });
            let e = await fetch(this._currentUserEndpoint + "/devices/start", { headers: { Authorization: `Bearer ${this._getAuthToken()}` }, method: "POST" }).then(o),
                t = await navigator.credentials
                    .create({ publicKey: this._parsePublicKey(e.handshake.challenge.publicKey) })
                    .catch((c) => {
                        throw new r("failed to parse public key", { status: 701, statusText: "PSG Parse Public Key For New Device Failed" });
                    })
                    .then((c) => c),
                i = e.user.id,
                s = await fetch(this._currentUserEndpoint + "/devices/finish", {
                    headers: { Authorization: `Bearer ${this._getAuthToken()}` },
                    method: "POST",
                    body: JSON.stringify({
                        user_id: i,
                        handshake_id: e.handshake.id,
                        handshake_response: {
                            rawId: T.encodeBytes(t == null ? undefined : t.rawId),
                            id: t == null ? undefined : t.id,
                            type: t == null ? undefined : t.type,
                            response: { attestationObject: T.encodeBytes(t == null ? undefined : t.response.attestationObject), clientDataJSON: T.encodeBytes(t == null ? undefined : t.response.clientDataJSON) },
                        },
                    }),
                }).then(o);
            return E.setPsgCredID(i, t), s.device;
        }
        async deleteDevice(e) {
            if (!this.authGuard()) throw new r("Current user is not authorized.", { status: 401, statusText: "Unauthorized" });
            if (!e) throw new r("A deviceID is required to delete a device.", { status: 404, statusText: "Not Found" });
            let t = false;
            return (
                (t = await fetch(`${this._currentUserEndpoint}/devices/${e}`, { method: "DELETE", headers: { Authorization: `Bearer ${this._getAuthToken()}`, "Content-Type": "application/json" } }).then(async (i) =>
                    i.ok
                        ? true
                        : await i.text().then((s) => {
                              throw new r(s, i);
                          })
                )),
                t
            );
        }
        _parsePublicKey(e) {
            return (e.challenge = T.decodeBytes(e.challenge.toString())), (e.user.id = T.decodeBytes(e.user.id.toString())), e;
        }
        async getMetadata() {
            return this.authGuard() ? (await fetch(`${this._currentUserEndpoint}/user-metadata`, { method: "GET", headers: { Authorization: `Bearer ${this._getAuthToken()}` } }).then(o)).user_metadata : undefined;
        }
        async updateMetadata(e) {
            if (!this.authGuard) throw new r("Current user is not authorized.", { status: 401, statusText: "Unauthorized" });
            return (
                await fetch(`${this._currentUserEndpoint}/user-metadata`, {
                    method: "PATCH",
                    headers: { Authorization: `Bearer ${this._getAuthToken()}`, "Content-Type": "application/json" },
                    body: JSON.stringify({ user_metadata: e }),
                }).then(o)
            ).user;
        }
    };
var G = async (a, e) => {
    let t,
        i = new Promise((s) => {
            t = setTimeout(s, e);
        });
    return Promise.race([a, i]).then((s) => (clearTimeout(t), s));
};
var O = class {
    constructor(e) {
        (this.appID = e), (this.baseUrl = P.URL), (this.apiVersion = "v1"), (this.fullUrl = `${this.baseUrl}/${this.apiVersion}/apps/${this.appID}`);
    }
    credIDExists(e) {
        let t = localStorage.getItem("psg_cred_obj");
        return t ? !!JSON.parse(t)[e] : false;
    }
    setAuthToken(e) {
        new h().setAuthToken(e);
    }
    signOut() {
        new h().deleteAuthToken();
    }
    async register(e) {
        return await new _(this.fullUrl, e).withWebAuthn();
    }
    async login(e) {
        return await new k(this.fullUrl, e).withWebAuthn();
    }
    async appInfo() {
        return await new w(this.fullUrl).appInfo();
    }
    checkWebauthnConfig(e) {
        let t = true;
        return (
            e.auth_origin.replace(/\/$/, "") != window.location.origin.replace(/\/$/, "") &&
                (console.error(
                    'The auth_origin configured for webauthn in your app settings does not match the "origin" of your current URL.  Please reconfigure this in the admin console. (Your current "origin" is `' +
                        window.location.origin +
                        "`) Passage will continue to work with other authentication methods."
                ),
                (t = false)),
            t
        );
    }
    async isWebauthnSupported(e) {
        let t = false;
        return (
            navigator.brave && (await navigator.brave.isBrave())
                ? (t = false)
                : window.PublicKeyCredential
                ? e
                    ? (t = true)
                    : await G(
                          window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
                              .then((i) => {
                                  i ? (t = true) : (t = false);
                              })
                              .catch((i) => console.log("Something went wrong.")),
                          150
                      )
                : (t = false),
            t
        );
    }
    async identifierExists(e) {
        return await new w(this.fullUrl).identifierExists(e);
    }
    async newRegisterMagicLink(e) {
        return await new g(this.fullUrl).newRegister(e);
    }
    async newLoginMagicLink(e) {
        return await new g(this.fullUrl).newLogin(e);
    }
    async magicLinkActivate(e) {
        return await new g(this.fullUrl).activate(e);
    }
    async magicLinkActivateWebAuthnLogin(e) {
        return await new g(this.fullUrl).activateWebAuthnLogin(e);
    }
    async magicLinkActivateWebAuthnNewDevice(e) {
        return await new g(this.fullUrl).activateWebAuthnNewDevice(e);
    }
    async getMagicLinkStatus(e) {
        return await new g(this.fullUrl).getStatus(e);
    }
    getCurrentUser(e) {
        return new v(e);
    }
    async createUser(e) {
        return (await fetch(`${this.fullUrl}/users`, { body: JSON.stringify(U({}, e)), method: "POST" }).then(o)).user;
    }
};
var H = ((i) => ((i.email = "email"), (i.phone = "phone"), (i.both = "both"), i))(H || {}),
    j = ((s) => ((s.Phone = "phone"), (s.Email = "email"), (s.Both = "both"), (s.Either = "either"), s))(j || {}),
    q = ((l) => ((l.STRING = "string"), (l.BOOLEAN = "boolean"), (l.INTEGER = "integer"), (l.DATE = "date"), (l.PHONE = "phone"), (l.EMAIL = "email"), l))(q || {});
var $ = ((i) => ((i.ACTIVE = "active"), (i.INACTIVE = "inactive"), (i.PENDING = "pending"), i))($ || {});
0 && (module.exports = { Identifier, Passage, PassageError, PassageErrorCode, PassageUserStatus, RequiredIdentifier, User, UserMetadataType });
