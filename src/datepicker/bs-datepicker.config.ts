import { Injectable } from '@angular/core';
import {
  DatepickerRenderOptions,
  BsDatepickerViewMode,
  DatepickerDateCustomClasses
} from './models';


/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
@Injectable()
export class BsDatepickerConfig implements DatepickerRenderOptions {
  /** sets use adaptive position */
  adaptivePosition = false;
  /** sets use UTC date time format */
  useUtc = false;
  /** turn on/off animation */
  isAnimated = false;
  value?: Date | Date[];
  isDisabled?: boolean;
  /**
   * Default min date for all date/range pickers
   */
  minDate?: Date;
  /**
   * Default max date for all date/range pickers
   */
  maxDate?: Date;
  /**
   * Default date custom classes for all date/range pickers
   */
  dateCustomClasses: DatepickerDateCustomClasses[];
  /**
   * Disable specific days, e.g. [0,6] will disable all Saturdays and Sundays
   */
  daysDisabled?: number[];
  /**
   * Disable specific dates
   */
  datesDisabled?: Date[];
  /**
   * Makes dates from other months active
   */
  selectFromOtherMonth?: boolean;

  /**
   * Allows select first date of the week by click on week number
   */
  selectWeek?: boolean;

  /**
   * Allows select daterange as first and last day of week by click on week number (dateRangePicker only)
   */
  selectWeekDateRange?: boolean;

  /**
   * Shows previous and current month, instead of current and next (dateRangePicker only)
   */
  showPreviousMonth?: boolean;

  /**
   * Add class to current day
   */
  customTodayClass?: string;

  /**
   * Default mode for all date pickers
   */
  minMode?: BsDatepickerViewMode;

  /**
   * If true, returns focus to the datepicker / daterangepicker input after date selection
   */
  returnFocusToInput = false;

  /** CSS class which will be applied to datepicker container,
   * usually used to set color theme
   */
  containerClass = 'theme-green';

  // DatepickerRenderOptions
  displayMonths = 1;
  /**
   * Allows to hide week numbers in datepicker
   */
  showWeekNumbers = true;

  dateInputFormat = 'L';
  // range picker
  rangeSeparator = ' - ';
  /**
   * Date format for date range input field
   */
  rangeInputFormat = 'L';

  // DatepickerFormatOptions
  monthTitle = 'MMMM';
  yearTitle = 'YYYY';
  dayLabel = 'D';
  monthLabel = 'MMMM';
  yearLabel = 'YYYY';
  weekNumbers = 'w';
}
