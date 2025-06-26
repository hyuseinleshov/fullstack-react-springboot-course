import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { AdminMessages } from "./components/AdminMessages";
import { AddNewBook } from "./components/AddNewBook";
import { ChangeQuantityOfBooks } from "./components/ChangeQuantityOfBooks";

export const ManageLibraryPage = () => {
  const { authState } = useOktaAuth();

  // Use a single state variable for the active tab
  const [activeTab, setActiveTab] = useState("add");

  if (authState?.accessToken?.claims.userType === undefined) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <div className="mt-5">
        <h3>Manage Library</h3>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              onClick={() => setActiveTab("add")}
              className={`nav-link${activeTab === "add" ? " active" : ""}`}
              id="nav-add-book-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-add-book"
              type="button"
              role="tab"
              aria-controls="nav-add-book"
              aria-selected={activeTab === "add"}
            >
              Add new book
            </button>
            <button
              onClick={() => setActiveTab("quantity")}
              className={`nav-link${activeTab === "quantity" ? " active" : ""}`}
              id="nav-quantity-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-quantity"
              type="button"
              role="tab"
              aria-controls="nav-quantity"
              aria-selected={activeTab === "quantity"}
            >
              Change Quantity
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`nav-link${activeTab === "messages" ? " active" : ""}`}
              id="nav-messages-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-messages"
              type="button"
              role="tab"
              aria-controls="nav-messages"
              aria-selected={activeTab === "messages"}
            >
              Messages
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className={`tab-pane fade${activeTab === "add" ? " show active" : ""}`}
            id="nav-add-book"
            role="tabpanel"
            aria-labelledby="nav-add-book-tab"
          >
            {activeTab === "add" && <AddNewBook />}
          </div>
          <div
            className={`tab-pane fade${activeTab === "quantity" ? " show active" : ""}`}
            id="nav-quantity"
            role="tabpanel"
            aria-labelledby="nav-quantity-tab"
          >
            {activeTab === "quantity" && <ChangeQuantityOfBooks />}
          </div>
          <div
            className={`tab-pane fade${activeTab === "messages" ? " show active" : ""}`}
            id="nav-messages"
            role="tabpanel"
            aria-labelledby="nav-messages-tab"
          >
            {activeTab === "messages" && <AdminMessages />}
          </div>
        </div>
      </div>
    </div>
  );
};
