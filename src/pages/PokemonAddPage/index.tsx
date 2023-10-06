import React, { useState } from "react";
import SelectTypesPokedex from "../../components/SelectTypesPokedex";
import { useFetchGetAllPokemonTypes } from "../../helpers/hooks/useFetchGetAllPokemonTypes";
import { Languages } from "../../types";
import { savePokemon } from "../../helpers/savePokemon";
import { saveImage } from "../../helpers/saveImage";
import BackButton from "../../components/BackButton";

function PokemonAddPage() {
  const [selectedTypeOne, setSelectedTypeOne] = useState("");
  const [selectedTypeTwo, setSelectedTypeTwo] = useState("");
  const [englishName, setEnglishName] = useState("");
  const [japaneseName, setJapaneseName] = useState("");
  const [chineseName, setChineseName] = useState("");
  const [frenchName, setFrenchName] = useState("");
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [spAttack, setSpAttack] = useState("");
  const [spDefense, setSpDefense] = useState("");
  const [speed, setSpeed] = useState("");

  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setSelectedImage(event?.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const pokedexTypesData = useFetchGetAllPokemonTypes();
  const pokemonTypes: string[] = pokedexTypesData.map(
    (data: Languages) => data.english
  );

  const options = ["", ...pokemonTypes];

  function handleTypeOneChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedTypeOne(event.target.value);
  }

  function handleTypeTwoChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedTypeTwo(event.target.value);
  }

  // Event handlers for input fields
  function handleEnglishNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEnglishName(event.target.value);
  }

  function handleJapaneseNameChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setJapaneseName(event.target.value);
  }

  function handleChineseNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setChineseName(event.target.value);
  }

  function handleFrenchNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFrenchName(event.target.value);
  }

  function handleHpChange(event: React.ChangeEvent<HTMLInputElement>) {
    setHp(event.target.value);
  }

  function handleAttackChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAttack(event.target.value);
  }

  function handleDefenseChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDefense(event.target.value);
  }

  function handleSpAttackChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSpAttack(event.target.value);
  }

  function handleSpDefenseChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSpDefense(event.target.value);
  }

  function handleSpeedChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSpeed(event.target.value);
  }

  const handleSavePokemonButton = async () => {
    if (!selectedTypeOne) {
      alert("Please add alteast one type of this pokemon");
      return;
    }

    if (!englishName) {
      alert("Please add english name for this pokemon");
      return;
    }

    if (!hp) {
      alert("Please add HP");
      return;
    }

    if (!defense) {
      alert("Please add Defense");
      return;
    }

    if (!attack) {
      alert("Please add Attack");
      return;
    }

    if (!spAttack) {
      alert("Please add Sp Attack");
      return;
    }

    if (!spDefense) {
      alert("Please add Sp Defense");
      return;
    }

    if (!speed) {
      alert("Please add Speed");
      return;
    }

    const pokemonDetails = {
      selectedTypeOne,
      selectedTypeTwo,
      englishName,
      japaneseName,
      chineseName,
      frenchName,
      hp: Number(hp),
      defense: Number(defense),
      attack: Number(attack),
      spAttack: Number(spAttack),
      spDefense: Number(spDefense),
      speed: Number(speed),
    };

    const saveResult = await savePokemon(pokemonDetails);
    const saveImageResult = await saveImage(
      `${saveResult.id}.png`,
      selectedImage
    );

    if (saveResult && saveImageResult) {
      alert("Save Successfully");
      setSelectedTypeOne("");
      setSelectedTypeTwo("");
      setEnglishName("");
      setJapaneseName("");
      setChineseName("");
      setFrenchName("");
      setHp("");
      setAttack("");
      setDefense("");
      setSpAttack("");
      setSpDefense("");
      setSpeed("");
      setSelectedImage("");
    } else {
      alert("Error saving this pokemon. Try again.");
    }
  };

  return (
    <>
      <BackButton url="/" />
      <form className="container border border-dark rounded p-4 mt-100px">
        <h3 className="text-center">Add New Pokemon</h3>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="form-group d-flex flex-column">
              {selectedImage && (
                <div className="mb-4">
                  <h4 className="text-center">Preview</h4>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                </div>
              )}

              <label htmlFor="imageUpload" className="btn btn-primary">
                Upload Pokemon Image
                <input
                  type="file"
                  accept="image/*"
                  id="imageUpload"
                  className="form-control-file d-none"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>

        {selectedImage && (
          <div>
            <div className="form-group">
              <h6>Pokemon Name</h6>
              <div className="container p-4">
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="English Name"
                      value={englishName}
                      onChange={handleEnglishNameChange}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="Japanese Name"
                      value={japaneseName}
                      onChange={handleJapaneseNameChange}
                    />
                  </div>
                  <div className="w-100 mb-4"></div>
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="Chinese Name"
                      value={chineseName}
                      onChange={handleChineseNameChange}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="French Name"
                      value={frenchName}
                      onChange={handleFrenchNameChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <h6>Pokemon Type</h6>
              <div className="container p-4">
                <div className="row">
                  <div className="col">
                    <SelectTypesPokedex
                      text="Type 1"
                      options={options}
                      onChange={handleTypeOneChange}
                    />
                  </div>
                  <div className="col">
                    <SelectTypesPokedex
                      text="Type 2"
                      options={options}
                      onChange={handleTypeTwoChange}
                      disabled={!selectedTypeOne}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group">
              <h6>Pokemon Stats</h6>
              <div className="container p-4">
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="HP"
                      value={hp}
                      onChange={handleHpChange}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="Attack"
                      value={attack}
                      onChange={handleAttackChange}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="Defense"
                      value={defense}
                      onChange={handleDefenseChange}
                    />
                  </div>
                  <div className="w-100 mb-4"></div>
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="Sp. Attack"
                      value={spAttack}
                      onChange={handleSpAttackChange}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="Sp. Defense"
                      value={spDefense}
                      onChange={handleSpDefenseChange}
                    />
                  </div>
                  <div className="col">
                    <input
                      className="form-control"
                      placeholder="Speed"
                      value={speed}
                      onChange={handleSpeedChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-5">
              <div className="d-flex justify-content-center">
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSavePokemonButton}
                  >
                    Save Pokemon
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default PokemonAddPage;
