import { Link } from "react-router-dom";
import "../Error.css";
function ErrorMoj() {
  return (
    <Link
      to={"/"}
      className="block w-[100%] bg-warning
    p-0"
    >
      <div class="flex-container">
        <div class="text-center">
          <h1>
            <span class="fade-in" id="digit1">
              4
            </span>
            <span class="fade-in" id="digit2">
              0
            </span>
            <span class="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 class="fadeIn">PAGE NOT FOUND</h3>
          <button type="button" name="button">
            Return To Home
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ErrorMoj;
