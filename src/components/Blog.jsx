import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "./blog/Blog.css";

const Blog = () => {
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#blog-table" });
    doc.save("blog.pdf");
  };

  return (
    <div>
      <div className="text-center mb-5">
        <h2>Answer and Questions</h2>
      </div>

      <table id="blog-table">
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr
            style={{ fontSize: "25px" }}
            className=" border  border-danger qna "
          >
            <td className="text-danger p-3 ">
              1.Tell us the differences between uncontrolled and controlled
              components?
            </td>
            <td className="text-primary">
              controlled components refer to components that have their state
              and behavior controlled by the parent component. These components
              rely on props passed down from the parent component to update
              their state and behavior. Uncontrolled components refer to
              components that manage their own state internally
            </td>
          </tr>
          <tr style={{ fontSize: "25px" }} className="border  border-danger">
            <td className="text-danger  p-3">
              2.How to validate React props using PropTypes?
            </td>
            <td className="text-primary">
              Props and PropTypes are important mechanisms for passing read-only
              attributes between React components. There are various PropTypes
              that can be used to validate the props, such as PropTypes.any,
              PropTypes.bool, PropTypes.number, PropTypes.string,
              PropTypes.func, PropTypes.array, PropTypes.object, and
              PropTypes.symbol.
            </td>
          </tr>
          <tr style={{ fontSize: "25px" }} className="border  border-danger">
            <td className="text-danger p-3">
              3.Tell us the difference between nodejs and express js?
            </td>
            <td className="text-primary">
              Compared to NodeJS, ExpressJS manages server setup clutter more
              efficiently. In contrast, NodeJS has an event-driven, non-blocking
              I/O model, which makes it a practical and lightweight server
              option. There must be a low-latency environment that can handle
              many concurrent connections.
            </td>
          </tr>
          <tr style={{ fontSize: "25px" }} className="border  border-danger">
            <td className="text-danger p-3">
              4.What is a custom hook, and why will you create a custom hook?
            </td>
            <td className="text-primary">
              A custom Hook is a JavaScript function whose name starts with
              ”use” and that may call other Hooks. If you have code in a
              component that you feel would make sense to extract, either for
              reuse elsewhere or to keep the component simpler, you can pull
              that out into a function. it can be reused easily, which makes the
              code cleaner and reduces the time to write the code. It also
              enhances the rendering speed of the code as a custom hook does not
              need to be rendered again and again while rendering the whole
              code.
            </td>
          </tr>
        </tbody>
      </table>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={downloadPdf}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Blog;
