(this["webpackJsonpfront-end"] = this["webpackJsonpfront-end"] || []).push([
  [0],
  {
    37: function (e, t, s) {},
    46: function (e, t, s) {},
    54: function (e, t, s) {},
    55: function (e, t, s) {},
    56: function (e, t, s) {},
    58: function (e, t, s) {},
    60: function (e, t, s) {},
    79: function (e, t, s) {},
    80: function (e, t, s) {},
    81: function (e, t, s) {},
    85: function (e, t, s) {
      "use strict";
      s.r(t);
      var c = s(0),
        a = s(20),
        r = s.n(a),
        n = (s(54), s(37), s(11)),
        i = s(3),
        o = s(88),
        l = s(87),
        u = s(47),
        j = (s(55), s.p + "static/media/logo.5aff8b5f.png"),
        h = s(16),
        d = (s(56), s(1));
      function b(e) {
        var t = e.label,
          s = e.onClick,
          c = e.isSecondary,
          a = e.style;
        return Object(d.jsx)("div", {
          onClick: s,
          style: a,
          className: "button ".concat(c ? "secondary-button" : ""),
          children: t,
        });
      }
      var p = s(7),
        O = s(4);
      s(58);
      function x(e) {
        var t = e.placeholder,
          s = e.onChange,
          a = e.onEnterKey,
          r = e.initialValue,
          n = e.style,
          i = e.className,
          o = e.maxLength,
          l = e.inputArgs,
          u = Object(c.useState)(r || ""),
          j = Object(O.a)(u, 2),
          h = j[0],
          b = j[1];
        return Object(d.jsx)("div", {
          style: {
            position: "relative",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          },
          children: Object(d.jsx)(
            "input",
            Object(p.a)(
              {
                className: "text-input-search ".concat(i),
                style: n,
                onKeyPress: function (e) {
                  13 === e.charCode && a && a(h);
                },
                value: h,
                placeholder: t,
                onChange: function (e) {
                  var t = e.target.value;
                  o &&
                    void 0 !== t &&
                    o < t.length &&
                    (t = t.substring(0, t.length - 1)),
                    s && s(t),
                    b(t);
                },
              },
              l
            )
          ),
        });
      }
      function m(e) {
        return (
          Object(u.a)(e),
          Object(d.jsxs)("div", {
            className: "navbar",
            children: [
              Object(d.jsx)(h.b, {
                to: "/",
                children: Object(d.jsxs)("div", {
                  className: "navbar-left-container",
                  children: [
                    Object(d.jsx)("img", {
                      src: j,
                      alt: "",
                      className: "navbar-img",
                    }),
                    "Walnut",
                  ],
                }),
              }),
              Object(d.jsxs)("div", {
                className: "navbar-right-container",
                children: [
                  Object(d.jsx)(x, { placeholder: "Search..." }),
                  Object(d.jsx)("div", { style: { width: "10px" } }),
                  Object(d.jsx)(h.b, {
                    to: "/about",
                    children: Object(d.jsx)(b, { label: "About" }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      s(60);
      var f = s(23),
        g = s(8),
        v = s(12),
        y = s.p + "static/media/requisite-label.488f48a1.png",
        A =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVXSURBVHgBzVrNchtFEO6ZWQmqsCnByZQDXt9yi3KBkCKOfOMW5wki3ygItvwEdp4gtqFSuWEfOdlvYNlQKcMl4gmyhrjwjQXiqpS0O53u1a60Wu+fpFWi76KZ3fFs/8z0fN1jARPCta8e1lAIk5oVgdh6+euPTZgABBSMT+48XFFC/kTNSuRDlkZ8dP7LD3tQIBQUiGtLa5tSiKfUfD/mdUUIsTL72ef//v/n76dQEArzwFytYRpavwg9smnpHCIJjkJWBaAZvEDHuXn+7EkLCoABBUEhbgZtBNG6lGLZbm7b3O8qhwfUrHJfKPWYfpahABTigaj1nXZ78eL0qRUew5sapDzqPdB6uYiNLaEADFgfcS8qPMMTFrHZeyDEJhSAsRVg69Narwd9t9N5lDiYolCvLURt/va3VRgTYyuQx/oBrnhBqXUYE2MpMJT1A4S8QGG1PnfrGxPGwMgKVGqNSknjUV+udOsHiHpBlcsHPBeMiJEU4IgyQ8JjKLbnsr4PR6lV+vFCLIXB6qzWz0f1RGYYZet80G6btF6rgrkN4l3egOExZP0NogjbMATm73zfoPkew+BETZr72EXdUgj2K8NoBWdJLgU8YV13hdxyVwtBpyeYEOE0EdjY5TdDCZ+qRMw3SLGWx6UAjqNcqqcAhzRplA7CyyIVZC2n01nNs+7TwIFAab1FgjzIM95TxHHuB1REBJPQSfoc4q1tY5fXtMi9Z2Tx1qVSh1muHRYsQ8l1qsSbamScBehS8aRzwiY+tcxKeAp8urT+ImR5FmxH8DrsOC1rTAuPC5M2t2MYJuUWVRByPSCF7Im/TnYXRZijkKUtt91evnjHQifhykohPiVJ+FpvBK3raRWecdHctuhnP+izVwbOAYoIZzD96O09krciJWJ/M3KMn3YIcSNoUkCxpVRqL/SyxmkhTCk82RBXgj6d/ofKtk5ff7jwxUfUv+U/r1Ef/jv77RimCL5ht4I+c6+/nz3Z9/aAISW/COeoW9PkiSvCc8qq1Aa3vaoEe+HjxS9/prLH19Sd88dNhSdihQ/l272yyjQqkSU8Y6Au1FNC6+u0oa/7j2tF13LyICo8LfrDSyXvRylMIp2eX1rbCxEsmyoNN9/WIRetchBD2D8/2a3HjU1MaEpSNqC/sStGudyAt4TBGhNYScIzEhWw2FVab4Qe5aK7RUCEYr3QejVtbGpKyfkr8Q3L71bma42xyyBZ8MilT9bY+lnFr8ycWITPB9eduAJC9HMS+vYfWeOHSuo1YKFJTPw3RF8BxH+yxmcrgP0UkxNtmDRct+/xSPEgDnk80Fs2XCWACaNULltBG7tFhVSkKhCuXfIpWHQeHAeOfqHAAYu3v1tIG5+qgFTSDNqUI09++QTfCgWOtpKp9wipCvDNSn9WkRkRCgPiWf+zIjXypd/QcPaD6DWpWtaEIRBU9ISUlTwVtjC4dEOCB10zbayRMZMZNKUyLMgACz2j9TqpXKcT1ASjOz09g9mlNYue7xGn2s/kVByJ/L8lNW7AqArQZuI73u5EjlPJEpyoB/OlShxD9CPKFkWZOjHNVEXYa0GbzoVUz6WHUcReHoBS3YMYwZn2znSZ4xYMVvb4wy2/lG7HKHJEtdE6xH1WqT7vogIbpCC1Oh29mOM8lNy7U9La7pRKK6J7zzXgGQ63QrsbUQ7jCSvkpojUXoML8FKn4413y+/REsQ+8824DMwsr0fygkQw8YIcN/FJiiRg5+XJbiqNz3XNSstkm36S7rNGKrFnKZKWxISR+56YP0iD76Efl2lzW3wZ8UrK7XFOaH/eB/4/hoBXBUfcyXuH/AZ43bXkyxrnZgAAAABJRU5ErkJggg==",
        S = s(48),
        C = s.n(S).a.create({ baseURL: "http://localhost:5000/" });
      function N() {
        var e = Object(i.n)().code,
          t = Object(c.useState)({
            course_code: "",
            course_name: "",
            division: "Faculty of Applied Science and Engineering",
            department:
              "Department of Edward S. Rogers Sr. Dept. of Electrical & Computer Engineering",
            graph: "",
            course_description: "",
            syllabus: "",
            prerequisites: "",
            corequisites: "",
            exclusions: "",
            starred: !1,
            graphics: [],
            username: localStorage.getItem("username"),
          }),
          s = Object(O.a)(t, 2),
          a = s[0],
          r = s[1];
        Object(c.useEffect)(function () {
          console.log("pass in course code: ", e),
            C.get("/course/details?code=".concat(e), { code: e }).then(
              function (t) {
                console.log(t.data);
                var s = Object(p.a)({}, a);
                (s.course_code = t.data.course.code),
                  (s.course_name = t.data.course.name),
                  (s.course_description = t.data.course.description),
                  (s.graph = t.data.course.graph);
                var c = t.data.course.prereq.length;
                if (c > 1) {
                  for (var n = "", i = 0; i < c; i++)
                    (n += t.data.course.prereq[i]), i !== c - 1 && (n += ", ");
                  s.prerequisites = n;
                } else s.prerequisites = t.data.course.prereq;
                var o = t.data.course.coreq.length;
                if (o > 1) {
                  for (var l = "", u = 0; u < l; u++)
                    (l += t.data.course.coreq[u]), u !== o - 1 && (l += ", ");
                  s.corequisites = l;
                } else s.corequisites = t.data.course.coreq;
                var j = t.data.course.exclusion.length;
                if (j > 1) {
                  for (var h = "", d = 0; d < h; d++)
                    (h += t.data.course.exclusion[d]),
                      d !== j - 1 && (h += ", ");
                  s.exclusions = h;
                } else s.exclusions = t.data.course.exclusion;
                var b = "http://courses.skule.ca/course/" + e;
                s.syllabus = b;
                (s.graphics = []), r(s);
              }
            );
        }, []);
        return Object(d.jsx)("div", {
          className: "page-content",
          children: Object(d.jsxs)(f.a, {
            className: "course-template",
            children: [
              Object(d.jsx)(v.a, {
                float: "center",
                className: "course-title",
                children: Object(d.jsx)(g.a, {
                  xs: 8,
                  children: Object(d.jsxs)("h1", {
                    children: [a.course_code, " : ", a.course_name],
                  }),
                }),
              }),
              Object(d.jsxs)(v.a, {
                children: [
                  Object(d.jsxs)(g.a, {
                    className: "col-item",
                    children: [
                      Object(d.jsx)("h3", { children: "Division" }),
                      Object(d.jsx)("p", { children: a.division }),
                    ],
                  }),
                  Object(d.jsxs)(g.a, {
                    className: "col-item",
                    children: [
                      Object(d.jsx)("h3", { children: "Department" }),
                      Object(d.jsx)("p", { children: a.department }),
                    ],
                  }),
                  Object(d.jsxs)(g.a, {
                    className: "col-item",
                    children: [
                      Object(d.jsx)("h3", {
                        children: "Past Tests and Syllabi",
                      }),
                      Object(d.jsx)("button", {
                        className: "syllabus-link",
                        onClick: function () {
                          var e = window.open(
                            a.syllabus,
                            "_blacnk",
                            "noopener,noreferrer"
                          );
                          e && (e.opener = null);
                        },
                        children: "View",
                      }),
                    ],
                  }),
                ],
              }),
              Object(d.jsxs)(v.a, {
                className: "col-item course-description",
                children: [
                  Object(d.jsx)("h3", { children: "Course Description" }),
                  Object(d.jsx)("p", { children: a.course_description }),
                ],
              }),
              Object(d.jsxs)(v.a, {
                className: "col-item course-requisite",
                children: [
                  Object(d.jsx)(v.a, {
                    children: Object(d.jsx)("h3", {
                      children: "Course Requisites",
                    }),
                  }),
                  Object(d.jsxs)(v.a, {
                    children: [
                      Object(d.jsxs)(g.a, {
                        className: "requisites-display",
                        children: [
                          Object(d.jsx)("h4", { children: "Pre-Requisites" }),
                          Object(d.jsx)("p", { children: a.prerequisites }),
                        ],
                      }),
                      Object(d.jsxs)(g.a, {
                        className: "requisites-display",
                        children: [
                          Object(d.jsx)("h4", { children: "Co-Requisites" }),
                          Object(d.jsx)("p", { children: a.corequisites }),
                        ],
                      }),
                      Object(d.jsxs)(g.a, {
                        className: "requisites-display",
                        children: [
                          Object(d.jsx)("h4", { children: "Exclusion" }),
                          Object(d.jsx)("p", { children: a.exclusions }),
                        ],
                      }),
                    ],
                  }),
                  Object(d.jsx)(v.a, {
                    children: Object(d.jsxs)("div", {
                      className: "req-graph",
                      children: [
                        Object(d.jsx)("img", {
                          style: { width: "70%", marginBottom: "3%" },
                          alt: "",
                          src: y,
                        }),
                        Object(d.jsx)("img", {
                          src: "data:image/jpeg;base64,".concat(a.graph),
                          alt: "",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var E = s(10),
        k = s(13),
        q = s(30),
        w = s(14),
        B = s(15),
        R =
          (s(46),
          (function (e) {
            Object(w.a)(s, e);
            var t = Object(B.a)(s);
            function s(e) {
              var c;
              return (
                Object(E.a)(this, s),
                ((c = t.call(this, e)).redirectCourse = function () {
                  c.props.history.push(
                    "/course/details/".concat(c.props.course_code),
                    { course_code: c.props.course_code }
                  );
                }),
                (c.state = {
                  course_code: c.props.course_code,
                  course_name: c.props.course_name,
                  division: "Division of Computer Engineering",
                  faculty: "Faculty of Applied Science and Engineering",
                  starred: !1,
                  username: localStorage.getItem("username"),
                }),
                A,
                c
              );
            }
            return (
              Object(k.a)(s, [
                {
                  key: "render",
                  value: function () {
                    return Object(d.jsx)(f.a, {
                      children: Object(d.jsx)("a", {
                        href: "courseDetails/".concat(this.state.course_code),
                        onClick: this.redirectCourse,
                        className: "search-result-item",
                        style: { textDecoration: "none" },
                        children: Object(d.jsxs)(v.a, {
                          className: "result-display",
                          children: [
                            Object(d.jsx)(g.a, {
                              children: Object(d.jsx)("h5", {
                                children: this.state.course_code,
                              }),
                            }),
                            Object(d.jsx)(g.a, {
                              children: Object(d.jsx)("h5", {
                                children: this.state.course_name,
                              }),
                            }),
                            Object(d.jsx)(g.a, {
                              children: this.state.division,
                            }),
                            Object(d.jsx)(g.a, {
                              children: this.state.faculty,
                            }),
                          ],
                        }),
                      }),
                    });
                  },
                },
              ]),
              s
            );
          })(c.Component)),
        U =
          (s(79),
          (function (e) {
            Object(w.a)(s, e);
            var t = Object(B.a)(s);
            function s(e) {
              var c;
              return (
                Object(E.a)(this, s),
                ((c = t.call(this, e)).state = {
                  course_code: "Course Code",
                  course_name: "Course Name",
                  division: "Division",
                  faculty: "Faculty",
                  starred: "Status",
                }),
                c
              );
            }
            return (
              Object(k.a)(s, [
                {
                  key: "render",
                  value: function () {
                    return Object(d.jsx)(f.a, {
                      children: Object(d.jsxs)(v.a, {
                        className: "label",
                        children: [
                          Object(d.jsx)(g.a, {
                            children: Object(d.jsx)("h5", {
                              children: this.state.course_code,
                            }),
                          }),
                          Object(d.jsx)(g.a, {
                            children: Object(d.jsx)("h5", {
                              children: this.state.course_name,
                            }),
                          }),
                          Object(d.jsx)(g.a, {
                            children: Object(d.jsx)("h5", {
                              children: this.state.division,
                            }),
                          }),
                          Object(d.jsx)(g.a, {
                            children: Object(d.jsx)("h5", {
                              children: this.state.faculty,
                            }),
                          }),
                        ],
                      }),
                    });
                  },
                },
              ]),
              s
            );
          })(c.Component)),
        T =
          (s(80),
          (function (e) {
            Object(w.a)(s, e);
            var t = Object(B.a)(s);
            function s() {
              var e;
              return (
                Object(E.a)(this, s),
                ((e = t.call(this)).getData = function (t) {
                  C.get("/searchc?input=".concat(t)).then(function (t) {
                    if (200 === t.status)
                      if ((e.setState({ results: [] }), t.data.length > 0)) {
                        var s = t.data.length,
                          c = [];
                        c.push(Object(d.jsx)(U, {}));
                        for (var a = 0; a < s; a++)
                          c.push(
                            Object(d.jsx)(
                              R,
                              {
                                course_code: t.data[a].code,
                                course_name: t.data[a].name,
                              },
                              t.data[a]._id
                            )
                          );
                        e.setState({ results: c });
                      } else if (0 === t.data.length) alert("Course not found");
                      else {
                        var r = [];
                        r.push(Object(d.jsx)(U, {})),
                          r.push(
                            Object(d.jsx)(
                              R,
                              {
                                course_code: t.data.course.code,
                                course_name: t.data.course.name,
                              },
                              t.data.course._id
                            )
                          ),
                          e.setState({ results: r });
                      }
                    else
                      400 === t.status && alert("System Error. Please refresh");
                  });
                }),
                (e.state = { input: "", results: [] }),
                (e.handleChange = e.handleChange.bind(Object(q.a)(e))),
                (e.handleSubmit = e.handleSubmit.bind(Object(q.a)(e))),
                e
              );
            }
            return (
              Object(k.a)(s, [
                {
                  key: "handleChange",
                  value: function (e) {
                    this.setState({ input: e.target.value });
                  },
                },
                {
                  key: "handleSubmit",
                  value: function (e) {
                    e.preventDefault(), this.getData(this.state.input);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return Object(d.jsxs)("div", {
                      className: "SearchQuery",
                      children: [
                        Object(d.jsxs)("div", {
                          style: { marginTop: "10%", textAlign: "center" },
                          children: [
                            Object(d.jsx)("h1", {
                              children: " Education Pathways ",
                            }),
                            Object(d.jsx)("br", {}),
                            Object(d.jsxs)("form", {
                              onSubmit: this.handleSubmit,
                              className: "search",
                              children: [
                                Object(d.jsx)("input", {
                                  placeholder:
                                    "Search for course code, course name, keyword ...",
                                  className: "text-input",
                                  type: "text",
                                  value: this.state.input,
                                  onChange: this.handleChange,
                                }),
                                Object(d.jsx)("input", {
                                  type: "submit",
                                  value: "Search",
                                  className: "submit-button",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(d.jsx)("div", {
                          className: "search-result-display",
                          children: this.state.results,
                        }),
                      ],
                    });
                  },
                },
              ]),
              s
            );
          })(c.Component));
      function D() {
        return Object(d.jsx)("div", {
          style: { textAlign: "center" },
          children: Object(d.jsxs)("div", {
            className: "body_text",
            children: [
              Object(d.jsxs)("p", {
                children: [
                  "Welcome to CARTE's in-development tool for course selection at UofT. Education Pathways allows for more intelligent course searching, by matching not just the terms you search, but ones relevant to them. The more terms you search for, the more relevant your results will be! Even try searching across disciplines for the courses that best cover each. Whatever year you are looking for, Education Pathways will also suggest courses in earlier years that will best help you to prepare. To get the most out of this, try searching for courses in a later year and see what is suggested for your current one. We are looking for feedback to improve Education Pathways and make it more useful for students. If you have ideas or suggestions, please",
                  " ",
                  Object(d.jsx)("a", {
                    href: "mailto:alex.olson@utoronto.ca",
                    children: " email us! ",
                  }),
                  " ",
                  Object(d.jsx)("br", {}),
                ],
              }),
              Object(d.jsx)("p", {
                children: Object(d.jsx)("b", {
                  children: "Development Team: ",
                }),
              }),
              Object(d.jsxs)("p", {
                children: [
                  "Alexander Olson ",
                  Object(d.jsx)("a", {
                    href: "https://carte.utoronto.ca/",
                    children: " (CARTE)",
                  }),
                  " ",
                ],
              }),
              Object(d.jsxs)("p", {
                children: [
                  "Student team from",
                  " ",
                  Object(d.jsx)("a", {
                    href: "https://shuiblue.github.io/UofT-ECE444/",
                    children: "ECE444-Fall2021",
                  }),
                  " ",
                  ": Janelle Cuevas, Jean Lin, Terry Luan, Cansin Varol, Nick Woo",
                ],
              }),
            ],
          }),
        });
      }
      s(81);
      function W() {
        return Object(d.jsxs)("div", {
          className: "home-page",
          children: [
            Object(d.jsx)("h1", { children: "Walnut" }),
            Object(d.jsx)("h2", {
              children:
                "University of Toronto\u2019s Detailed Course Database and Comparison Tool",
            }),
            Object(d.jsx)("div", { style: { height: "20px" } }),
            Object(d.jsx)(I, {}),
            Object(d.jsx)("div", { style: { height: "10px" } }),
            Object(d.jsx)(b, { label: "Search", isSecondary: !0 }),
          ],
        });
      }
      var I = function () {
        var e = Object(c.useState)(0),
          t = Object(O.a)(e, 2),
          s = t[0],
          a = t[1],
          r = Object(c.useState)(!1),
          n = Object(O.a)(r, 2),
          i = n[0],
          o = n[1];
        return (
          Object(c.useEffect)(function () {
            var e = setInterval(function () {
              o(!0),
                setTimeout(function () {
                  o(!1),
                    a(function (e) {
                      return (e + 1) % 4;
                    });
                }, 350);
            }, 3100);
            return function () {
              return clearInterval(e);
            };
          }, []),
          Object(d.jsx)(x, {
            style: { width: "80%", maxWidth: "650px" },
            placeholder:
              "Search by " +
              ["course code", "course name", "description", "keyword"][s] +
              "...",
            className: i ? "text-input-search-placeholder-transition" : "",
          })
        );
      };
      function Y() {
        return Object(d.jsx)("div", { children: "Error 404" });
      }
      var P = {
        404: { label: "404", component: Object(d.jsx)(Y, {}) },
        main: [
          { label: "Home", component: Object(d.jsx)(W, {}), path: "/" },
          { label: "About", component: Object(d.jsx)(D, {}), path: "/about" },
          { label: "Search", component: Object(d.jsx)(T, {}), path: "/search" },
          {
            label: "Course Details",
            component: Object(d.jsx)(N, {}),
            path: "/courseDetails/:code",
          },
        ],
      };
      function F() {
        var e = Object(i.i)().pathname;
        return (
          Object(c.useEffect)(
            function () {
              window.scrollTo(0, 0);
            },
            [e]
          ),
          null
        );
      }
      function H() {
        var e = Object(i.i)();
        return Object(d.jsxs)(o.a, {
          children: [
            Object(d.jsx)("div", {
              style: { textAlign: "center" },
              children: Object(d.jsx)(m, {}),
            }),
            Object(d.jsx)(F, {}),
            Object(d.jsx)(
              l.a,
              {
                classNames: "page",
                timeout: 300,
                children: Object(d.jsxs)(i.c, {
                  location: e,
                  children: [
                    Object(n.a)(P.main).map(function (e) {
                      return Object(d.jsx)(
                        i.a,
                        {
                          path: e.path,
                          element: Object(d.jsx)("div", {
                            style: {
                              position: "absolute",
                              right: 0,
                              left: 0,
                              bottom: 0,
                              top: 0,
                            },
                            children: Object(d.jsx)("div", {
                              style: { minHeight: "100vh" },
                              children: e.component,
                            }),
                          }),
                        },
                        e.path
                      );
                    }),
                    Object(d.jsx)(i.a, {
                      path: "*",
                      element: P[404].component,
                    }),
                  ],
                }),
              },
              e.key
            ),
          ],
        });
      }
      function K() {
        return Object(d.jsx)(h.a, { children: Object(d.jsx)(H, {}) });
      }
      s(84);
      var Q = document.getElementById("root");
      r.a.render(Object(d.jsx)(K, {}), Q);
    },
  },
  [[85, 1, 2]],
]);
//# sourceMappingURL=main.91795657.chunk.js.map
