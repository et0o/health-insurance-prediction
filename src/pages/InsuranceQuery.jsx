import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const InsuranceQuery = () => {
  const [prompt, setPrompt] = useState("");
  const [outPut, setOutput] = useState("");
  const [fetching, setFetching] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [concatenatedString, setConcatenatedString] = useState();

  const [name, setName] = useState();
  const handleInputChangeName = (e) => {
    setName(e.target.value);
  };

  const [dateOfBirth, setDateOfBirth] = useState();
  const handleInputChangeDob = (e) => {
    setDateOfBirth(e.target.value);
  };

  const [height, setHeight] = useState();
  const handleInputChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const [weight, setWeight] = useState();
  const handleInputChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  const [smoke, setSmoke] = useState();
  const handleSmoke = (e) => {
    setSmoke(e.target.value);
  };
  const [allergies, setAllergies] = useState();
  const handleInputChangeAllergies = (e) => {
    setAllergies(e.target.value);
  };
  const [haveSurgaries, setHaveSurgaries] = useState();
  const handleInputChangeHaveSurgaries = (e) => {
    setHaveSurgaries(e.target.value);
  };
  const [preMedicalCondition, setPreMedicalCondition] = useState();
  const handleInputChangePreMedicalCondition = (e) => {
    setPreMedicalCondition(e.target.value);
  };

  const [currentMedicineName, setCurrentMedicineName] = useState();
  const handleCurrentMedicineName = (e) => {
    setPreMedicalCondition(e.target.value);
  };
  const [alcohol, setAlcohol] = useState();
  const handleAlcohol = (e) => {
    setAlcohol(e.target.value);
  };
  const [excerciseRoutine, setExcerciseRoutine] = useState();
  const handleExcerciseRoutine = (e) => {
    setExcerciseRoutine(e.target.value);
  };
  const [veganOrNot, setveganOrNot] = useState();
  const handleVeganOrNot = (e) => {
    setveganOrNot(e.target.value);
  };
  const [currentHealthInsurance, setCurrentHealthInsurance] = useState();
  const handlesetCurrentHealthInsurance = (e) => {
    setCurrentHealthInsurance(e.target.value);
  };
  const [anythingMore, setAnythingMore] = useState();
  const handleAnythingMore = (e) => {
    setAnythingMore(e.target.value);
  };

  const [concatenated, setConcatenated] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConcatenated(
      `My name is ${name}. my date of birth is ${dateOfBirth}. my height is ${height} and weight is ${weight}.  i have ${preMedicalCondition} and currently i am taking ${currentMedicineName}. i have ${allergies}. and i have been consuming ${smoke} smoke.i have been consuming ${alcohol} alcohol. i have ${excerciseRoutine}. and i am ${veganOrNot}. i have ${currentHealthInsurance}. and ${anythingMore} .`
    );

    // const functions = getFunction();
    // const chatCompletion = httpsCallable(functions, "chatCompletion");
    // try {
    //   const data = {
    //     concatenated,
    //   };
    //   setFetching(true);
    //   const result = await chatCompletion(data);
    //   setOutput(result.data.aiResponse);
    // } catch (error) {
    // } finally {
    //   setFetching(false);
    // }
  };

  return (
    <>
      <div className="justify-center flex py-3">
        <form
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-5 text-center ">
            Medical Insurance Query
          </h2>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              required
              onChange={handleInputChangeName}
              placeholder="Enter Your Name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              required
              value={dateOfBirth}
              onChange={handleInputChangeDob}
              type="date"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="height"
            >
              Height
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="text"
              required
              value={height}
              onChange={handleInputChangeHeight}
              placeholder="Enter Your Height"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="weight"
            >
              Weight
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="text"
              required
              value={weight}
              onChange={handleInputChangeWeight}
              placeholder="Enter Your Weight"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Do you have any pre-existing medical conditions?
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please specify"
              value={preMedicalCondition}
              onChange={handleInputChangePreMedicalCondition}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Are you currently taking any medications? If yes, please list
              them.
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please list your medications"
              value={currentMedicineName}
              required
              onChange={handleCurrentMedicineName}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Do you have any allergies? If yes, please specify.
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please specify your allergies"
              value={allergies}
              required
              onChange={handleInputChangeAllergies}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Have you had any surgeries or hospitalizations in the past year?
              If yes, please provide details.
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please provide details"
              value={haveSurgaries}
              required
              onChange={handleInputChangeHaveSurgaries}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Do you smoke?
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="text"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={smoke}
                  onChange={handleSmoke}
                  name="smoking"
                  placeholder="Yes/No ? How Often?"
                />
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Do you consume alcohol? If yes, how often?
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please specify"
              value={alcohol}
              required
              onChange={handleAlcohol}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Do you have a regular exercise routine? If yes, please describe.
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please describe your exercise routine"
              value={excerciseRoutine}
              required
              onChange={handleExcerciseRoutine}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Please describe your dietary habits (e.g., vegetarian,
              non-vegetarian, vegan, etc.).
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please describe your dietary habits"
              value={veganOrNot}
              required
              onChange={handleVeganOrNot}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Do you currently have any health insurance? If yes, please provide
              details.
            </label>
            <textarea
              className="  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please provide details about your current health insurance"
              value={currentHealthInsurance}
              required
              onChange={handlesetCurrentHealthInsurance}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Is there anything else you would like us to know?
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Additional comments"
              value={anythingMore}
              required
              onChange={handleAnythingMore}
            ></textarea>
          </div>

          <div className="flex items-center justify-end">
            <button
              disabled={fetching}
              className={`${
                fetching
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-500 text-black "
              } font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              type="submit"
              onClick={handleOpen}
            >
              {fetching ? "Fetching Response" : "Submit Response"}
            </button>
            <Dialog
              open={open}
              handler={handleOpen}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Hello {name} !</DialogHeader>
              <DialogBody>
                <h1>Date of Birth : {dateOfBirth}</h1>
                <h1>Height : {height}</h1>
                <h1>Wieght : {weight}</h1>
                <h1>
                  You have pre-existing medical conditions :{" "}
                  {preMedicalCondition}
                </h1>
                <h1>
                  currently taking any Medications : {currentMedicineName}
                </h1>
                <h1>You have allergies : {allergies}</h1>
                <h1>Any surgeries : {haveSurgaries}</h1>
                <h1>Smoke : {smoke}</h1>
                <h1>Consume alcohol : {alcohol}</h1>
                <h1>Exercise routine : {excerciseRoutine}</h1>
                <h1>Dietary habits : {veganOrNot}</h1>
                Yes, you should opt for health insurance. Health insurance
                provides significant financial protection in case of medical
                emergencies, hospitalizations, and regular check-ups, which is
                crucial given your lifestyle choices and medical needs. It
                ensures access to preventative care, helping manage and mitigate
                the risks associated with smoking, alcohol consumption, and
                being underweight. Additionally, having health insurance offers
                peace of mind in case of severe allergic reactions or health
                issues, and it provides resources for health improvement, such
                as smoking cessation programs, nutritional counseling, and
                fitness programs. Considering these factors, health insurance is
                essential for effectively managing your health and financial
                well-being.
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </form>
      </div>
    </>
  );
};

export default InsuranceQuery;
