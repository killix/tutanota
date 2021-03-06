//@flow

import m from "mithril"
import {getEventText, hasAlarmsForTheUser} from "./CalendarUtils"
import type {EventTextTimeOptionEnum} from "../api/common/TutanotaConstants"
import {CalendarEventBubble} from "./CalendarEventBubble"

type ContinuingCalendarEventBubbleAttrs = {|
	event: CalendarEvent,
	startsBefore: boolean,
	endsAfter: boolean,
	color: string,
	onEventClicked: clickHandler,
	showTime: EventTextTimeOptionEnum,
|}

export class ContinuingCalendarEventBubble implements MComponent<ContinuingCalendarEventBubbleAttrs> {

	view({attrs}: Vnode<ContinuingCalendarEventBubbleAttrs>) {
		return m(".flex.calendar-event-cont.darker-hover", [
			attrs.startsBefore
				? m(".event-continues-right-arrow", {
					style: {
						"border-left-color": "transparent",
						"border-top-color": "#" + attrs.color,
						"border-bottom-color": "#" + attrs.color,
					},
				})
				: null,
			m(".flex-grow.overflow-hidden",
				m(CalendarEventBubble, {
					text: getEventText(attrs.event, attrs.showTime),
					color: attrs.color,
					onEventClicked: () => attrs.onEventClicked(attrs.event),
					noBorderLeft: attrs.startsBefore,
					noBorderRight: attrs.endsAfter,
					hasAlarm: hasAlarmsForTheUser(attrs.event)
				}),
			),
			attrs.endsAfter
				? m(".event-continues-right-arrow", {
					style: {"border-left-color": "#" + attrs.color}
				})
				: null,
		])
	}
}
