import React, { useState, useEffect } from 'react';
import usePlacesAutocomplete,
{ 
  getGeocode,
  getZipCode
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios'

import { 
  CHANGE_SHIPPING_STREET_ONE,
  CHANGE_SHIPPING_CITY,
  CHANGE_SHIPPING_STATE,
  CHANGE_SHIPPPING_ZIP,
  CHANGE_ABANDON_USER
} from "constants/index"
import { API_ROOT } from "configuration/index"

const StepOne = ({ onChangeHandler, validated, onContinue, onBack }) => {
  const checkoutValue = useSelector(state => state.checkout)
  const dispatch = useDispatch()

  useEffect(() => {
    setValue(checkoutValue.shippingStreetOne)
  }, [])

  const isNumber = (evt) => {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
    } else {
      return true;
    }
  }

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    onChangeHandler(e)
    setValue(e.target.value)
  };

  const handleSelect = async (address) => {
    var addressType, zipCode, addressInfo;
    await getGeocode({address})
      .then((results) => {
        addressType = results[0].types[0]
        addressInfo = results[0].address_components
        getZipCode(results[0], false)
          .then((code) => {
            zipCode = code
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });

    if (addressType != 'street_address' && addressType != 'premise') {
      setValue("", false)
      alert("please input stress address")
      return;
    }

    let street_address = addressInfo[0].long_name + " " + addressInfo[1].long_name
    dispatch({type: CHANGE_SHIPPING_STREET_ONE, payload: street_address})
    dispatch({type: CHANGE_SHIPPING_CITY, payload: addressInfo[2].long_name})
    dispatch({type: CHANGE_SHIPPPING_ZIP, payload: zipCode})

    for (let i = 0; i < addressInfo.length; i++) {
      if (addressInfo[i].types[0] == "administrative_area_level_1") {
        dispatch({type: CHANGE_SHIPPING_STATE, payload: addressInfo[i].long_name})
        break;
      }
    }
    setValue(street_address, false)
    clearSuggestions()
  };

  const renderSuggestions = () => {
    const suggestions = data.map(({ place_id, description }) => (
      <ComboboxOption className="combobox-option" key={place_id} value={description} />
    ));

    return (
      <>
        {suggestions}
      </>
    );
  };

  const submit = () => {
    let date = new Date()
    let userInfo = {
      firstName: checkoutValue.shippingFirstname,
      lastName: checkoutValue.shippingLastname,
      phoneNumber: checkoutValue.phoneNumber,
      emailAddress: checkoutValue.emailAddress,
      streetAddress: checkoutValue.streetAddress,
      shippingCity: checkoutValue.shippingCity,
      shippingStreet: checkoutValue.shippingStreetOne,
      shippingZip: checkoutValue.shippingZip,
      date: date.getUTCFullYear() + " " + Number(date.getUTCMonth() + 1) + " " + date.getUTCDate() + " " + date.getUTCHours() + " " + date.getUTCMinutes()
    }

    dispatch({type: CHANGE_ABANDON_USER, payload: userInfo})

    axios.post(`${API_ROOT}/abandon`, userInfo)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
    onContinue()
  }

  return (
    <>
      <span>Your Shipping Details</span>
      <div className="checkout-flex-row">
        <div className="checkout-inline">
          <label>First Name</label>
          <input
            name="shipping-firstname"
            required
            className="checkout-panel-info-input"
            value={checkoutValue.shippingFirstname}
            onChange={onChangeHandler}
          />
        </div>
        <div className="checkout-inline">
          <label>Last Name</label>
          <input
            name="shipping-lastname"
            required
            className="checkout-panel-info-input checkout-inline"
            value={checkoutValue.shippingLastname}
            onChange={onChangeHandler}
          />
        </div>
      </div>

      <label>Phone Number</label>
      <input
        type="text"
        required
        name="phone-number"
        className="checkout-panel-info-input"
        value={checkoutValue.phoneNumber}
        onChange={onChangeHandler}
      />

      <label>Email Address</label>
      <input
        type="text"
        name="email-address"
        required
        className="checkout-panel-info-input"
        value={checkoutValue.emailAddress}
        onChange={onChangeHandler}
      />

      <label>Street Address</label>
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          name="shipping-street-one"
          className="checkout-panel-info-input"
          value={value}
          onInput={handleInput}
          disabled={!ready}
        />
        <ComboboxPopover className="combobox-popover">
          <ComboboxList className="combobox-list">{status === "OK" && renderSuggestions()}</ComboboxList>
        </ComboboxPopover>
      </Combobox>
      {/* <input
        name="shipping-street-one"
        className="checkout-panel-info-input"
        value={checkoutValue.shippingStreetOne}
        onChange={onChangeHandler}
      /> */}

      <div className="checkout-flex-row">
        <div className="checkout-inline">
          <label>City</label>
          <input
            type="text"
            name="shipping-city"
            required
            className="checkout-panel-info-input"
            value={checkoutValue.shippingCity}
            onChange={onChangeHandler}
          />
        </div>
        <div className="checkout-inline">
          <label>State/Province</label>
          <input
            name="shipping-state"
            className="checkout-panel-info-input"
            value={checkoutValue.shippingState}
            onChange={onChangeHandler}
          />
        </div>
      </div>

      <label>Zip Code</label>
      <input
        name="shipping-zip"
        className="checkout-panel-info-input"
        onKeyPress={isNumber}
        value={checkoutValue.shippingZip}
        onChange={onChangeHandler}
      />
      <div className="checkout-panel-info-control">
        <button className="checkout-panel-info-control-button" onClick={onBack}>
          BACK
        </button>
        <button
          className="checkout-panel-info-control-button"
          onClick={submit}
        >
          CONTINUE
        </button>
      </div>
    </>
  )
}

export default StepOne
