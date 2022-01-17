const NotificationType = {
  Success: 1,
  Error: 2,
  Warning: 3,
  Information: 4,
};

//navigateTo
/**
 * Navigates to the specified table list, table record, or HTML web resource.
 * @param {PageInput} PageInput Required Input about the page to navigate to. pageType: String. Specify "entityrecord","entitylist", "webresource".  entityName: String. The logical name of the table to load in the list control. data: (Optional) Object. A dictionary object that passes extra parameters to the form/web resource.
 */
function Navigate(
  PageInput,
  NavigationOptions = {
    target: 1, //Inline
    height: { value: 80, unit: "%" },
    width: { value: 80, unit: "%" },
    position: 1,
  }
) {
  Xrm.Navigation.navigateTo(PageInput, NavigationOptions).then(
    successCallback,
    errorCallback
  );
}

//Notify( "Custom page notify warning message", NotificationType.Warning )
function Notify(
  Message,
  NotificationType = NotificationType.Information,
  Timeout = 10
) {
  var notification = {
    type: 2,
    level: NotificationType,
    message: Message,
    showCloseButton: true,
  };

  Xrm.App.addGlobalNotification(notification).then(
    function success(result) {
      console.log("Notification created with ID: " + result);
      // perform other operations as required on notification display
    },
    function (error) {
      console.log(error.message);
    }
  );
}

/**
 * Get the value of the Column in Form/Grid
 * @param {Context} Context Required - FormContext/GridContext
 * @param {Column} Column Required - FormColumn/GridColumn
 */
function GetValue(Context, Column) {
  return Context.getAttribute(Column).getValue();
}

/**
 * Set the value of the Column in Form/Grid
 * @param {Context} Context Required - FormContext/GridContext
 * @param {Column} Column Required - FormColumn/GridColumn
 */

function SetValue(Context, Column, Value) {
  Context.getAttribute(Column).setValue(Value);
}
/**
 * Get the Required Level of the Column in Form/Grid, indicating whether a value for the column is required or recommended.
 * @param {Context} Context Required - FormContext/GridContext
 * @param {Column} Column Required - FormColumn/GridColumn
 */
function SetRequiredLevel(Context, Column, requirementLevel) {
  Context.getAttribute(Column).setRequiredLevel(requirementLevel);
}

/**
 * Get the Required Level of the Column in Form/Grid, indicating whether a value for the column is required or recommended.
 * @param {Context} Context Required - FormContext/GridContext
 * @param {Column} Column Required - FormColumn/GridColumn
 */
function GetRequiredLevel(Context, Column, RequirementLevel) {
  Context.getAttribute(Column).getRequiredLevel(RequirementLevel);
}

/**
 * Returns a string representing the logical name of the column.
 * @param {Context} Context Required - FormContext/GridContext
 * @param {Column} Column Required - FormColumn/GridColumn
 */
function GetName(Context, Column) {
  return Context.getAttribute(Column).getName();
}

/**
 * Returns a boolean value to indicate whether the value of a column is valid.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 */
function IsValid(FormContext, Column) {
  return FormContext.getAttribute(Column).isValid();
}

/**
 * Sets a value for a column to determine whether it is valid or invalid with a message.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 * @param {bool} bool Required - Specify false to set the column value to invalid and true to set the value to valid.
 * @param {Message} String Required - The message to display.
 */
function SetIsValid(FormContext, Column, bool, Message) {
  return FormContext.getAttribute(Column).isValid();
}

/**
 *Returns the option object or an array of option objects selected in a choice or choices column respectively.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 */
function GetSelectedOption(FormContext, Column) {
  return FormContext.getAttribute(Column).getSelectedOption();
}

/**
 *Returns a string value of the text for the currently selected option for a choice or choices column.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 */
function GetText(FormContext, Column) {
  return FormContext.getAttribute(Column).getText();
}

/**
 *Returns an option object with the value matching the argument (label or enumeration value) passed to the method.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 * @param {Value} String String (label of the option) or Number (enumeration value of the option).
 */
function GetOption(FormContext, Column, Value) {
  return FormContext.getAttribute(Column).getOption(Value);
}

/**
 *Returns a boolean value indicating if there are unsaved changes to the column value.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 */
function IsDirty(FormContext, Column) {
  return FormContext.getAttribute(Column).getIsDirty();
}

/**
 *Returns a string value that represents the type of column.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 */
function GetColumnType(FormContext, Column) {
  return FormContext.getAttribute(Column).getAttributeType();
}

/**
 *Returns a string value that represents formatting options for the column.
 * @param {Context} FormContext Required - FormContext/GridContext
 * @param {Column} Column Required - FormColumn/GridColumn
 */
function GetFormat(FormContext, Column) {
  return FormContext.getAttribute(Column).getFormat();
}

/**
 *Returns a string indicating when data from the column will be submitted when the record is saved.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 * @return {String}  Returns one of the following values: always,never,dirty
 */
function GetSubmitMode(FormContext, Column) {
  return FormContext.getAttribute(Column).getSubmitMode();
}

/**
 *Sets whether data from the column will be submitted when the record is saved.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 * @param {Mode} Mode Required - always,never,dirty
 * @return {String}  Returns one of the following values: always,never,dirty
 */
function SetSubmitMode(FormContext, Column, Mode) {
  return FormContext.getAttribute(Column).setSubmitMode(Mode);
}

/**
 *Returns a number indicating the minimum allowed value for a column.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 */
function GetMin(FormContext, Column) {
  return FormContext.getAttribute(Column).getMin();
}

/**
 *Returns a number indicating the maximum allowed value for a column.
 * @param {Context} FormContext Required - FormContext
 * @param {Column} Column Required - FormColumn
 */
function GetMax(FormContext, Column) {
  return FormContext.getAttribute(Column).getMax();
}

/**
 *Returns a tab.
 * @param {Context} FormContext Required - FormContext
 * @param {Tab} Tab Required - Tab
 */
function GetTab(FormContext, Tab) {
  return FormContext.ui.tabs.get(Tab);
}

/**
 * Returns a section.
 * @param {Context} FormContext Required - FormContext
 * @param {Section} Section Required - Section
 */
function GetSection(FormContext, Section) {
  return FormContext.ui.sections.get(Section);
}

/**
 *Returns a value that indicates whether the tab is currently visible.
 * @param {Context} FormContext Required - FormContext
 * @param {Tab} Tab Required - Tab
 */
function IsTabVisible(FormContext, Tab) {
  return FormContext.ui.tabs.get(Tab).getVisible();
}

/**
 * Returns a value that indicates whether the section is currently visible.
 * @param {Context} FormContext Required - FormContext
 * @param {Tab} Tab Required - Tab
 * @param {Section} Section Required - Section
 */
function IsSectionVisible(FormContext, Tab, Section) {
  return FormContext.ui.tabs.get(Tab).get(Section).getVisible();
}

/**
 *Sets a value that indicates whether the tab is currently visible.
 * @param {Context} FormContext Required - FormContext
 * @param {Tab} Tab Required - Tab
 * @param {bool} IsVisible Required - bool
 */
function SetTabVisible(FormContext, Tab, IsVisible) {
  return FormContext.ui.tabs.get(Tab).setVisible(IsVisible);
}

/**
 * Returns a value that indicates whether the section is currently visible.
 * @param {FormContext} FormContext Required - FormContext
 * @param {Tab} Tab Required - Tab
 * @param {Section} Section Required - Section
 * @param {bool} IsVisible Required - bool
 */
function SetSectionVisible(FormContext, Tab, Section, IsVisible) {
  return FormContext.ui.tabs.get(Tab).get(Section).setVisible(IsVisible);
}

/**
 *Sets a value that indicates whether the control is currently visible.
 * @param {FormContext} FormContext Required - FormContext
 * @param {Control} Control Required - Control
 * @param {bool} IsVisible Required - bool
 */
function SetControlVisible(FormContext, Control, IsVisible) {
  return FormContext.ui.controls.get(Control).setVisible(IsVisible);
}

/**
 *Returns a value that indicates whether the tab is currently visible.
 * @param {FormContext} FormContext Required - FormContext
 * @param {Control} Control Required - Control
 */
function IsControlVisible(FormContext, Control) {
  return FormContext.ui.controls.get(Control).getVisible();
}
