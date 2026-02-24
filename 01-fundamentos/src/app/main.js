Module Program

    Sub Main()

        Try
            Console.WriteLine("===== CONVERSOR DE UNIDADES =====")
            Console.WriteLine("Seleccione el tipo de conversión:")
            Console.WriteLine("1. Temperatura")
            Console.WriteLine("2. Longitud")
            Console.Write("Opción: ")

            Dim tipoInput As String = Console.ReadLine()
            Dim tipo As Integer

            ' Validar opción principal
            If Not Integer.TryParse(tipoInput, tipo) Or (tipo <> 1 And tipo <> 2) Then
                MostrarError("Tipo de conversión no válido.")
                Return
            End If

            If tipo = 1 Then
                MenuTemperatura()
            Else
                MenuLongitud()
            End If

        Catch ex As Exception
            MostrarError("Error inesperado: " & ex.Message)
        End Try

        Console.WriteLine(vbCrLf & "Programa finalizado correctamente.")
        Console.ReadKey()

    End Sub

    ' ================= TEMPERATURA =================
    Sub MenuTemperatura()

        Console.WriteLine(vbCrLf & "Conversiones disponibles:")
        Console.WriteLine("1. Celsius a Fahrenheit")
        Console.WriteLine("2. Fahrenheit a Celsius")
        Console.WriteLine("3. Celsius a Kelvin")
        Console.Write("Opción: ")

        Dim opcionInput As String = Console.ReadLine()
        Dim opcion As Integer

        If Not Integer.TryParse(opcionInput, opcion) Or opcion < 1 Or opcion > 3 Then
            MostrarError("Conversión de temperatura no válida.")
            Return
        End If

        Dim valor As Double = LeerNumero()

        If Double.IsNaN(valor) Or Double.IsInfinity(valor) Then
            MostrarError("Número no válido o infinito.")
            Return
        End If

        Dim resultado As Double

        Select Case opcion
            Case 1 ' C → F
                resultado = (valor * 9 / 5) + 32
            Case 2 ' F → C
                resultado = (valor - 32) * 5 / 9
            Case 3 ' C → K
                resultado = valor + 273.15
        End Select

        Console.WriteLine("Resultado: " & Math.Round(resultado, 2))

    End Sub

    ' ================= LONGITUD =================
    Sub MenuLongitud()

        Console.WriteLine(vbCrLf & "Conversiones disponibles:")
        Console.WriteLine("1. Metros a Kilómetros")
        Console.WriteLine("2. Kilómetros a Metros")
        Console.WriteLine("3. Centímetros a Metros")
        Console.Write("Opción: ")

        Dim opcionInput As String = Console.ReadLine()
        Dim opcion As Integer

        If Not Integer.TryParse(opcionInput, opcion) Or opcion < 1 Or opcion > 3 Then
            MostrarError("Conversión de longitud no válida.")
            Return
        End If

        Dim valor As Double = LeerNumero()

        If Double.IsNaN(valor) Or Double.IsInfinity(valor) Then
            MostrarError("Número no válido o infinito.")
            Return
        End If

        Dim resultado As Double

        Select Case opcion
            Case 1 ' m → km
                resultado = valor / 1000
            Case 2 ' km → m
                resultado = valor * 1000
            Case 3 ' cm → m
                resultado = valor / 100
        End Select

        Console.WriteLine("Resultado: " & Math.Round(resultado, 2))

    End Sub

    ' ================= VALIDACIÓN NÚMERO =================
    Function LeerNumero() As Double

        Console.Write("Ingrese el valor a convertir: ")
        Dim input As String = Console.ReadLine()
        Dim numero As Double

        If Not Double.TryParse(input, numero) Then
            MostrarError("Debe ingresar un número válido.")
            Return Double.NaN
        End If

        Return numero

    End Function

    ' ================= MENSAJE ERROR =================
    Sub MostrarError(mensaje As String)
        Console.WriteLine(vbCrLf & "ERROR: " & mensaje)
    End Sub

End Module