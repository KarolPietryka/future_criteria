package com.kp.futurecriteria.utility

import java.time.LocalDateTime
import java.time.OffsetDateTime

object DateUtils {

    fun toLocalDateTime(dateTime: OffsetDateTime): LocalDateTime = dateTime.toLocalDateTime()

}