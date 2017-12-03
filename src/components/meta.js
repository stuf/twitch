import * as U from 'karet.util';
import * as L from 'partial.lenses';

export const Schedule = {
  programsFor: U.view(['programs', L.valueOr([])]),
  startTimeFor: U.view('startTime'),
  endTimeFor: U.view('endTime'),
  titleFor: U.view('title'),
  descriptionFor: U.view('description')
}
