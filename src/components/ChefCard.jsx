import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft, FaThumbsUp } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import LazyLoad from "react-lazyload";

const ChefCard = () => {
  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);
  const [isDisabled3, setIsDisabled3] = useState(false);

  const handleClick1 = () => {
    setIsDisabled1(true);

    // show toast
    toast.success("Added to favorites!", {
      onClose: () => setIsDisabled1(true),
      autoClose: 2000,
    });
  };
  const handleClick2 = () => {
    setIsDisabled2(true);

    // show toast
    toast.success("Added to favorites!", {
      onClose: () => setIsDisabled2(true),
      autoClose: 2000,
    });
  };
  const handleClick3 = () => {
    setIsDisabled3(true);

    // show toast
    toast.success("Added to favorites!", {
      onClose: () => setIsDisabled3(true),
      autoClose: 2000,
    });
  };

  const chefData = useLoaderData();
  const {
    image,
    id,
    name,
    years_of_experience,
    likes,
    num_of_recipes,
    rating,
    recipes,
  } = chefData;
  return (
    <div className="container">
      <div className="d-flex justify-content-around align-items-center mb-5">
        <div className="px-5">
          <h2 style={{ fontSize: "80px" }} className="">
            <span className="text-danger">{name}</span>
          </h2>
          <p className="text-secondary">
            This is one of those go-to sites, with everything you’ll ever need
            to prepare varied and delicious meals. In depth sections cover
            different meal types, dishes from around the world, and even special
          </p>
          <p>
            Experience: {years_of_experience}{" "}
            <span className="text-secondary">years</span>
          </p>
          <p>Recipes: {num_of_recipes}</p>
          <p>Likes: {likes}</p>
          <div className="d-flex gap-2">
            <Rating
              style={{ maxWidth: 100 }}
              value={Math.round(rating?.number || 0)}
              readOnly
            />
            <span className="text-secondary">{rating?.number}</span>
          </div>
        </div>
        <LazyLoad height={200} once>
          <img style={{ maxWidth: 550, maxHeight: 900 }} src={image} alt="" />
        </LazyLoad>
      </div>
      <Link to="/">
        <Button className="mb-5" variant="danger">
          <FaArrowLeft className="me-2" />
          Go back to Home
        </Button>
      </Link>
      <Card className="p-3 shadow">
        <Card.Body className="px-0">
          <Card.Title>
            <h1>{recipes?.[0].title}</h1>
            <div className="my-5">
              <Button
                className="px-4 d-flex justify-content-center align-items-center gap-2"
                variant="outline-primary"
                onClick={handleClick1}
                disabled={isDisabled1}
              >
                Favorite <FaThumbsUp />
              </Button>
              <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            </div>
          </Card.Title>
          <hr />
          <h4>Ingredients</h4>
          <hr />
          <Card.Text className="my-4">
            1. {recipes?.[0].ingredients[0]}
          </Card.Text>
          <Card.Text className="my-4">
            2. {recipes?.[0].ingredients[1]}
          </Card.Text>
          <Card.Text className="my-4">
            3. {recipes?.[0].ingredients[2]}
          </Card.Text>
          <Card.Text className="my-4">
            4. {recipes?.[0].ingredients[3]}
          </Card.Text>
          <Card.Text className="my-4">
            5. {recipes?.[0].ingredients[4]}
          </Card.Text>
          <hr />
          <h4>Instructions</h4>
          <hr />
          <Card.Text className="my-4">5. {recipes?.[1].instructions}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3 my-5 shadow">
        <Card.Body className="px-0">
          <Card.Title>
            <h1>{recipes?.[1].title}</h1>
            <div className="my-5">
              <Button
                className="px-4 d-flex justify-content-center align-items-center gap-2"
                variant="outline-primary"
                onClick={handleClick2}
                disabled={isDisabled2}
              >
                Favorite <FaThumbsUp />
              </Button>
              <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            </div>
          </Card.Title>
          <hr />
          <h4>Ingredients</h4>
          <hr />
          <Card.Text className="my-4">
            1. {recipes?.[0].ingredients[0]}
          </Card.Text>
          <Card.Text className="my-4">
            2. {recipes?.[0].ingredients[1]}
          </Card.Text>
          <Card.Text className="my-4">
            3. {recipes?.[0].ingredients[2]}
          </Card.Text>
          <Card.Text className="my-4">
            4. {recipes?.[0].ingredients[3]}
          </Card.Text>
          <Card.Text className="my-4">
            5. {recipes?.[0].ingredients[4]}
          </Card.Text>
          <hr />
          <h4>Instructions</h4>
          <hr />
          <Card.Text className="my-4">5. {recipes?.[1].instructions}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="p-3 shadow">
        <Card.Body className="px-0">
          <Card.Title>
            <h1>{recipes?.[2].title}</h1>
            <div className="my-5">
              <Button
                className="px-4 d-flex justify-content-center align-items-center gap-2"
                variant="outline-primary"
                onClick={handleClick3}
                disabled={isDisabled3}
              >
                Favorite <FaThumbsUp />
              </Button>
              <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            </div>
          </Card.Title>
          <hr />
          <h4>Ingredients</h4>
          <hr />
          <Card.Text className="my-4">
            1. {recipes?.[0].ingredients[0]}
          </Card.Text>
          <Card.Text className="my-4">
            2. {recipes?.[0].ingredients[1]}
          </Card.Text>
          <Card.Text className="my-4">
            3. {recipes?.[0].ingredients[2]}
          </Card.Text>
          <Card.Text className="my-4">
            4. {recipes?.[0].ingredients[3]}
          </Card.Text>
          <Card.Text className="my-4">
            5. {recipes?.[0].ingredients[4]}
          </Card.Text>
          <hr />
          <h4>Instructions</h4>
          <hr />
          <Card.Text className="my-4">5. {recipes?.[1].instructions}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefCard;
